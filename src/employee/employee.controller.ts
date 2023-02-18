import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.findById(id);
  }

  @Post()
  async create(@Body() employee: Employee): Promise<Employee> {
    return this.employeeService.create(employee);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() employee: Employee,
  ): Promise<Employee> {
    return this.employeeService.update(id, employee);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.delete(id);
  }
}
