import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './employee.model';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  async findById(id: string): Promise<Employee> {
    return this.employeeModel.findById(id).exec();
  }

  async create(employee: Employee): Promise<Employee> {
    const createdEmployee = new this.employeeModel(employee);
    return createdEmployee.save();
  }

  async update(id: string, employee: Employee): Promise<Employee> {
    return this.employeeModel
      .findByIdAndUpdate(id, employee, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Employee> {
    return this.employeeModel.findByIdAndDelete(id).exec();
  }
}
