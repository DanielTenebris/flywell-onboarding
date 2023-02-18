import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson } from './lesson.schema';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel(Lesson.name)
    private readonly lessonModel: Model<Lesson>,
  ) {}

  async create(lesson: Lesson): Promise<Lesson> {
    const createdLesson = new this.lessonModel(lesson);
    return createdLesson.save();
  }

  async findAll(): Promise<Lesson[]> {
    return this.lessonModel.find().exec();
  }

  async findOne(id: string): Promise<Lesson> {
    return this.lessonModel.findById(id).exec();
  }

  async update(id: string, lesson: Lesson): Promise<Lesson> {
    return this.lessonModel.findByIdAndUpdate(id, lesson, { new: true }).exec();
  }

  async delete(id: string): Promise<Lesson> {
    return this.lessonModel.findByIdAndRemove(id).exec();
  }
}
