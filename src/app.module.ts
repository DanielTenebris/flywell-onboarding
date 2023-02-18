import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { ConfigModule } from './config/config.module';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';
import { RoadmapModule } from './roadmap/roadmap.module';

@Module({
  imports: [
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
    ConfigModule,
    RoadmapModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
