import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuizDocument = Quiz & Document;

@Schema()
export class Quiz {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  options: string[];

  @Prop({ required: true })
  rightOption: number;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
