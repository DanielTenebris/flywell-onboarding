import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MaterialService } from './material.service';
import { Material } from './material.schema';

@Controller('material')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialService) {}

  @Post()
  async create(@Body() material: Material): Promise<Material> {
    return this.materialsService.create(material);
  }

  @Get()
  async findAll(): Promise<Material[]> {
    return this.materialsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Material> {
    return this.materialsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() material: Material,
  ): Promise<Material> {
    return this.materialsService.update(id, material);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.materialsService.remove(id);
  }
}
