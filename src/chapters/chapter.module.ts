import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChapterTHs } from "./entities/chapter-ths.entity";
import { ChapterTTs } from "./entities/chapter-tts.entity";
import { ChapterService } from "./chapter.service";
import { ChapterController } from "./chapter.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([ChapterTHs, ChapterTTs]),
    ],
    providers: [ChapterService],
    controllers: [ChapterController],
})
export class ChapterModule { }