import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Employee {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  position: string;
}

export type EmployeeDocument = Employee & Document;

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
