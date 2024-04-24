// comics.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commic } from './commic.entity';
import { CommicController } from './commic.controller';
import { CommicService } from './commic.service';

@Module({
    imports: [TypeOrmModule.forFeature([Commic])],
    controllers: [CommicController],
    providers: [CommicService],
})
export class CommicModule { }
