import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ChapterCKs } from "./entities/chapter-cks.entity";
import { ChapterDNs } from "./entities/chapter-dns.entity";
import { ChapterDSs } from "./entities/chapter-dss.entity";
import { ChapterDTs } from "./entities/chapter-dts.entity";
import { ChapterHHs } from "./entities/chapter-hhs.entity";
import { ChapterKAs } from "./entities/chapter-kas.entity";
import { ChapterKHIs } from "./entities/chapter-khis.entity";
import { ChapterKHs } from "./entities/chapter-khs.entity";
import { ChapterTHs } from "./entities/chapter-ths.entity";
import { ChapterVDs } from "./entities/chapter-vds.entity";
import { ChapterHNs } from "./entities/chapter-hns.entity";

@Injectable()
export class ChapterService {
    private repositoryMap: Map<string, Repository<any>> = new Map();

    constructor(
        @InjectRepository(ChapterCKs) private chapterCKsRepository: Repository<ChapterCKs>,
        @InjectRepository(ChapterDNs) private chapterDNsRepository: Repository<ChapterDNs>,
        @InjectRepository(ChapterDSs) private chapterDSsRepository: Repository<ChapterDSs>,
        @InjectRepository(ChapterDTs) private chapterDTsRepository: Repository<ChapterDTs>,
        @InjectRepository(ChapterHHs) private chapterHHsRepository: Repository<ChapterHHs>,
        @InjectRepository(ChapterKAs) private chapterKAsRepository: Repository<ChapterKAs>,
        @InjectRepository(ChapterKHIs) private chapterKHIsRepository: Repository<ChapterKHIs>,
        @InjectRepository(ChapterKHs) private chapterKHsRepository: Repository<ChapterKHs>,
        @InjectRepository(ChapterTHs) private chapterTHsRepository: Repository<ChapterTHs>,
        @InjectRepository(ChapterVDs) private chapterVDsRepository: Repository<ChapterVDs>,
        @InjectRepository(ChapterHNs) private chapterHNsRepository: Repository<ChapterHNs>,
    ) {
        this.repositoryMap.set('CK', chapterCKsRepository);
        this.repositoryMap.set('DN', chapterDNsRepository);
        this.repositoryMap.set('DS', chapterDSsRepository);
        this.repositoryMap.set('DT', chapterDTsRepository);
        this.repositoryMap.set('HH', chapterHHsRepository);
        this.repositoryMap.set('KA', chapterKAsRepository);
        this.repositoryMap.set('KHI', chapterKHIsRepository);
        this.repositoryMap.set('KH', chapterKHsRepository);
        this.repositoryMap.set('TH', chapterTHsRepository);
        this.repositoryMap.set('VD', chapterVDsRepository);
        this.repositoryMap.set('HN', chapterHNsRepository);
    }

    async countChapterById(category: string, cmId: string) {
        const repository = this.repositoryMap.get(category);
        if (!repository) {
            throw new Error('Invalid category');
        }
    }

    async findByCategory(category: string, cmId: string, page: number, size: number) {
        console.log(category);
        const repository = this.repositoryMap.get(category);
        console.log(repository);
        if (!repository) {
            throw new Error('Invalid category');
        }

        return repository.find({
            take: size,
            skip: (page - 1) * size,
            where: {
                commicId: cmId
            },
            order: {
                numberChapter: "ACS"
            }
        });
    }
}