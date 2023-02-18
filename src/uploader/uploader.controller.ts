import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BufferedFile } from '../minio/file.scheme';
import { uploaderRO } from './uploader.interface';
import { UploaderService } from './uploader.service';

@Controller('upload')
export class UploaderController {
  constructor(private readonly uploaderService: UploaderService) {}

  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: BufferedFile): Promise<uploaderRO> {
    return await this.uploaderService.uploadSingle(file);
  }
}
