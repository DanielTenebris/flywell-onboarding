import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TestDocument = Test & Document;

@Schema()
export class Test {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  options: string[];

  @Prop({ required: true })
  rightOption: number;
}

export const TestSchema = SchemaFactory.createForClass(Test);
