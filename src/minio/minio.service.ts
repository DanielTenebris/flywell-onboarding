import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';
import { BufferedFile } from './file.scheme';
import * as crypto from 'crypto';
import { minioRO } from './minio.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MinioClientService {
  private readonly baseBucket: string;

  public get client(): any {
    return this.minio.client;
  }

  constructor(
    private readonly configService: ConfigService,
    private readonly minio: MinioService,
  ) {
    this.baseBucket = this.configService.get('MINIO_BUCKET');
  }

  public async upload(
    file: BufferedFile,
    baseBucket: string = this.baseBucket,
  ): Promise<minioRO> {
    if (
      !(
        file.mimetype.includes('jpeg') ||
        file.mimetype.includes('png') ||
        file.mimetype.includes('mp4') ||
        file.mimetype.includes('mp3')
      )
    ) {
      throw new HttpException(
        'Error uploading file, wrong ext',
        HttpStatus.BAD_REQUEST,
      );
    }
    const temp_filename = Date.now().toString();
    const hashedFileName = crypto
      .createHash('md5')
      .update(temp_filename)
      .digest('hex');
    const ext = file.originalname.substring(
      file.originalname.lastIndexOf('.'),
      file.originalname.length,
    );
    const metaData = {
      'Content-Type': file.mimetype,
    };
    const filename = hashedFileName + ext;
    const fileName = `${filename}`;
    const fileBuffer = file.buffer;
    this.client.putObject(
      baseBucket,
      fileName,
      fileBuffer,
      metaData,
      function (err) {
        if (err)
          throw new HttpException(
            `Error uploading file, cant put; ${err}`,
            HttpStatus.BAD_REQUEST,
          );
      },
    );

    return {
      url: `${this.configService.get(
        'MINIO_ENDPOINT',
      )}:${this.configService.get('MINIO_PORT')}/${this.configService.get(
        'MINIO_BUCKET',
      )}/${filename}`,
    };
  }

  async delete(
    objetName: string,
    baseBucket: string = this.baseBucket,
  ): Promise<any> {
    return await this.client.removeObject(
      baseBucket,
      objetName,
      function (err) {
        if (err)
          throw new HttpException('Something wrong', HttpStatus.BAD_REQUEST);
      },
    );
  }
}
