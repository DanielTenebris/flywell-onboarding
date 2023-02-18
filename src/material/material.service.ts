import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Material, MaterialDocument } from './material.schema';

@Injectable()
export class MaterialService {
  constructor(
    @InjectModel(Material.name)
    private readonly materialModel: Model<MaterialDocument>,
  ) {}

  async create(material: Material): Promise<Material> {
    const createdMaterial = new this.materialModel(material);
    return createdMaterial.save();
  }

  async findAll(): Promise<Material[]> {
    return this.materialModel.find().exec();
  }

  async findOne(id: string): Promise<Material> {
    return this.materialModel.findById(id).exec();
  }

  async update(id: string, material: Material): Promise<Material> {
    return this.materialModel
      .findByIdAndUpdate(id, material, { new: true })
      .exec();
  }

  async remove(id: string): Promise<void> {
    await this.materialModel.findByIdAndDelete(id).exec();
  }
}
