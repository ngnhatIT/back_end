import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Images } from './image.entity';
import { ImageService } from './image.service';


@Module({
    imports: [TypeOrmModule.forFeature([Images])],
    providers: [ImageService],
    exports:[ImageService]
})
export class ImageModule { }