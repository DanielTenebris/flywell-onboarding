import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Lesson } from './lesson.schema';
import { LessonService } from './lesson.service';

@Controller('lesson')
export class LessonController {
  constructor(private lessonService: LessonService) {}

  @Post()
  async create(@Body() lesson: Lesson) {
    return this.lessonService.create(lesson);
  }

  @Get()
  async findAll() {
    return this.lessonService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.lessonService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() lesson: Lesson) {
    return this.lessonService.update(id, lesson);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.lessonService.delete(id);
  }
}
