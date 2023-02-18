import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Roadmap, RoadmapDocument } from './roadmap.schema';

@Injectable()
export class RoadmapService {
  constructor(
    @InjectModel(Roadmap.name) private roadmapModel: Model<RoadmapDocument>,
  ) {}

  async create(roadmap: Roadmap): Promise<Roadmap> {
    const createdRoadmap = new this.roadmapModel(roadmap);
    return createdRoadmap.save();
  }

  async findAll(): Promise<Roadmap[]> {
    return this.roadmapModel.find().exec();
  }

  async findOne(id: string): Promise<Roadmap> {
    return this.roadmapModel.findById(id).exec();
  }

  async update(id: string, roadmap: Roadmap): Promise<Roadmap> {
    return this.roadmapModel
      .findByIdAndUpdate(id, roadmap, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Roadmap> {
    return this.roadmapModel.findByIdAndRemove(id).exec();
  }

  async addLesson(id: string, lessonId: string): Promise<Roadmap> {
    return this.roadmapModel
      .findByIdAndUpdate(id, { $push: { lessons: lessonId } }, { new: true })
      .exec();
  }

  async removeLesson(id: string, lessonId: string): Promise<Roadmap> {
    return this.roadmapModel
      .findByIdAndUpdate(id, { $pull: { lessons: lessonId } }, { new: true })
      .exec();
  }
}
