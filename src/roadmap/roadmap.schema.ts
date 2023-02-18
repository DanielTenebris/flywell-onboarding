import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { LessonSchema, Lesson } from 'src/lessons/lesson.schema';

export type RoadmapDocument = Roadmap & Document;

@Schema()
export class Roadmap {
  @Prop({ type: [LessonSchema] })
  lessons: Lesson[];
}

export const RoadmapSchema = SchemaFactory.createForClass(Roadmap);
