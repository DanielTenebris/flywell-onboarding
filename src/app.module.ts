import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { RoadmapModule } from './roadmap/roadmap.module';
import { MinioClientModule } from './minio/minio.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ({
          uri: configService.get('DB_URL'),
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as MongooseModuleAsyncOptions),
    }),
    EmployeeModule,
    RoadmapModule,
    MinioClientModule,
    QuizModule,
  ],
})
export class AppModule {}
