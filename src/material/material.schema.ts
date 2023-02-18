import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Material {
  @Prop({ required: true })
  fileS3: string;

  @Prop({ required: true })
  contentLink: string;

  @Prop({ required: true })
  title: string;

  @Prop({ type: [String], required: true })
  tags: string[];
}

export type MaterialDocument = Material & Document;

export const MaterialSchema = SchemaFactory.createForClass(Material);
