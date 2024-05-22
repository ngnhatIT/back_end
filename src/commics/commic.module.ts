// comics.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commics } from './entities/commic.entity';
import { CommicController } from './commic.controller';
import { CommicService } from './commic.service';
import { ImageModule } from 'src/images/image.module';

@Module({
    imports: [TypeOrmModule.forFeature([Commics]), ImageModule],
    controllers: [CommicController],
    providers: [CommicService],
    exports: [CommicService]
})
export class CommicModule { }
