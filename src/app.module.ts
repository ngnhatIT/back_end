import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './configs/database.config';
import { CommicModule } from './commics/commic.module';
import { ChapterModule } from './chapters/chapter.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), CommicModule, ChapterModule],
})
export class AppModule { }
