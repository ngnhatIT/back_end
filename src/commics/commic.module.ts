// comics.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commics } from './commic.entity';
import { CommicController } from './commic.controller';
import { CommicService } from './commic.service';
import { ImageModule } from 'src/image/image.module';
import { ImageService } from 'src/image/image.service';

@Module({
    imports: [TypeOrmModule.forFeature([Commics]),ImageModule],
    controllers: [CommicController],
    providers: [CommicService],
})
export class CommicModule { }
