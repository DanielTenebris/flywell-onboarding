import { Injectable } from '@nestjs/common';
import { BufferedFile } from '../minio/file.scheme';
import { MinioClientService } from '../minio/minio.service';
import { uploaderRO } from './uploader.interface';

@Injectable()
export class UploaderService {
  constructor(private minioClientService: MinioClientService) {}

  async uploadSingle(file: BufferedFile): Promise<uploaderRO> {
    const uploaded_image = await this.minioClientService.upload(file);

    return {
      image_url: uploaded_image.url,
      message: 'Successfully uploaded to MinIO S3',
    };
  }
}
