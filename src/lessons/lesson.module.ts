import { Module } from '@nestjs/common';
import { LessonService } from '../lessons/lesson.service';
import { LessonController } from './lesson.controller';

@Module({})
export class LessonModule {
  controllers: [LessonController];
  services: [LessonService, LessonService];
}
