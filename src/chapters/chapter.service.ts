import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ChapterTHs } from "./entities/chapter-ths.entity";
import { Repository } from "typeorm";
import { ChapterTTs } from "./entities/chapter-tts.entity";

@Injectable()
export class ChapterService {
    constructor(
        @InjectRepository(ChapterTHs)
        private readonly chapterTHsRepository: Repository<ChapterTHs>,
        @InjectRepository(ChapterTTs)
        private readonly chapterTTsRepository: Repository<ChapterTTs>,
    ) { }

    async findByCategory(category: string,cmId:string) {
        switch (category) {
            case 'A':
                return await this.chapterTHsRepository.find({where:{
                    commicId: cmId
                }});
            case 'Z':
                return await this.chapterTTsRepository.find();
            default:
                throw new Error('Invalid category');
        }
    }
}