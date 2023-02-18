import { Module } from '@nestjs/common';
import { MaterialService } from './material.service';

@Module({
  providers: [MaterialService],
})
export class MaterialModule {}
