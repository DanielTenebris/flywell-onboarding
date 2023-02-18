import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing/test';
import { Document } from 'mongoose';

export type LessonDocument = Lesson & Document;

@Schema()
export class Lesson {
  @Prop()
  file: string;

  @Prop()
  title: string;

  @Prop()
  tests: Test[];
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
