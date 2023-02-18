import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test, TestDocument } from './test.schema';

@Injectable()
export class TestService {
  constructor(
    @InjectModel(Test.name) private readonly testSchema: Model<TestDocument>,
  ) {}

  async createTest(
    title: string,
    options: string[],
    rightOption: number,
  ): Promise<Test> {
    const createdTest = new this.testSchema({ title, options, rightOption });
    return createdTest.save();
  }

  async getTestById(id: string): Promise<Test> {
    return this.testSchema.findById(id).exec();
  }

  async updateTest(
    id: string,
    title: string,
    options: string[],
    rightOption: number,
  ): Promise<Test> {
    return this.testSchema
      .findByIdAndUpdate(id, { title, options, rightOption }, { new: true })
      .exec();
  }

  async deleteTest(id: string): Promise<Test> {
    const deletedTest = await this.testSchema.findByIdAndDelete(id).exec();
    return deletedTest;
  }
}
