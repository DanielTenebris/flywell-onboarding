import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Roadmap, RoadmapSchema } from 'src/roadmap/roadmap.schema';

@Schema()
export class Employee {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  position: string;

  @Prop()
  mentorContact: string;

  @Prop({ type: [RoadmapSchema] })
  roadmap: Roadmap
}

export type EmployeeDocument = Employee & Document;

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
