import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Roadmap } from './roadmap.schema';
import { RoadmapService } from './roadmap.service';

@Controller('roadmap')
export class RoadmapController {
  constructor(private roadmapService: RoadmapService) {}

  @Post()
  async create(@Body() roadmap: Roadmap) {
    return this.roadmapService.create(roadmap);
  }

  @Get()
  async findAll() {
    return this.roadmapService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.roadmapService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() roadmap: Roadmap) {
    return this.roadmapService.update(id, roadmap);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.roadmapService.delete(id);
  }
}
