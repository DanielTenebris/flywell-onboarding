import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quiz, QuizDocument } from './quiz.schema';

@Injectable()
export class QuizService {
  constructor(
    @InjectModel(Quiz.name) private readonly quizSchema: Model<QuizDocument>,
  ) {}

  async createQuiz(
    title: string,
    options: string[],
    rightOption: number,
  ): Promise<Quiz> {
    const createdQuiz = new this.quizSchema({ title, options, rightOption });
    return createdQuiz.save();
  }

  async getQuizById(id: string): Promise<Quiz> {
    return this.quizSchema.findById(id).exec();
  }

  async updateQuiz(
    id: string,
    title: string,
    options: string[],
    rightOption: number,
  ): Promise<Quiz> {
    return this.quizSchema
      .findByIdAndUpdate(id, { title, options, rightOption }, { new: true })
      .exec();
  }

  async deleteQuiz(id: string): Promise<Quiz> {
    const deletedQuiz = await this.quizSchema.findByIdAndDelete(id).exec();
    return deletedQuiz;
  }
}
