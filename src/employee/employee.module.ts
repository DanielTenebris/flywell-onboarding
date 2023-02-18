import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from './employee.schema';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
