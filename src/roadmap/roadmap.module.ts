import { Module } from '@nestjs/common';
import { LessonService } from '../lessons/lesson.service';
import { RoadmapController } from './roadmap.controller';
import { RoadmapService } from './roadmap.service';

@Module({})
export class RoadmapModule {
  controllers: [RoadmapController];
  services: [LessonService, RoadmapService];
}
