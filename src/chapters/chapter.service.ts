import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ChapterTHs } from "./entities/chapter-ths.entity";
import { Repository } from "typeorm";
import { ChapterCKs } from "./entities/chapter-cks.entity";
import { ChapterDNs } from "./entities/chapter-dns.entity";
import { ChapterDTs } from "./entities/chapter-dts.entity";
import { ChapterDSs } from "./entities/chapter-dss.entity";
import { ChapterHHs } from "./entities/chapter-hhs.entity";
import { ChapterKAs } from "./entities/chapter-kas.entity";
import { ChapterKHs } from "./entities/chapter-khs.entity";
import { ChapterKHIs } from "./entities/chapter-khis.entity";
import { ChapterVDs } from "./entities/chapter-vds.entity";
import { Category } from "src/util/enum.util";
import { ChapterHNs } from "./entities/chapter-hns.entity";


@Injectable()
export class ChapterService {
    chapterHNs: any;
    constructor(
        @InjectRepository(ChapterCKs)
        private readonly chapterCKsRepository: Repository<ChapterCKs>,
        @InjectRepository(ChapterDNs)
        private readonly chapterDNsRepository: Repository<ChapterDNs>,
        @InjectRepository(ChapterDSs)
        private readonly chapterDSsRepository: Repository<ChapterDSs>,
        @InjectRepository(ChapterDTs)
        private readonly chapterDTsRepository: Repository<ChapterDTs>,
        @InjectRepository(ChapterHHs)
        private readonly chapterHHsRepository: Repository<ChapterHHs>,
        @InjectRepository(ChapterKAs)
        private readonly chapterKAsRepository: Repository<ChapterKAs>,
        @InjectRepository(ChapterKHIs)
        private readonly chapterKHIsRepository: Repository<ChapterKHIs>,
        @InjectRepository(ChapterKHs)
        private readonly chapterKHsRepository: Repository<ChapterTHs>,
        @InjectRepository(ChapterTHs)
        private readonly chapterTHsRepository: Repository<ChapterKHs>,
        @InjectRepository(ChapterVDs)
        private readonly chapterVDsRepository: Repository<ChapterVDs>,
        @InjectRepository(ChapterHNs)
        private readonly chapterHNssRepository: Repository<ChapterHNs>,

    ) { }

    async findByCategory(category: number, cmId: string, size: number, page: number) {

        switch (category) {
            case Category.ChapterCK:
                return await this.chapterCKsRepository.find({
                    where: {
                        commicId: cmId
                    },
                    take: size,
                    skip: (page - 1) * size
                });
            case Category.ChapterDN:
                return await this.chapterDNsRepository.find({
                    where: {
                        commicId: cmId
                    },
                    take: size,
                    skip: (page - 1) * size
                });
            case Category.ChapterDS:
                return await this.chapterDSsRepository.find({
                    where: {
                        commicId: cmId
                    },
                    take: size,
                    skip: (page - 1) * size
                });
            case Category.ChapterDT:
                return await this.chapterDTsRepository.find({
                    where: {
                        commicId: cmId
                    },
                    take: size,
                    skip: (page - 1) * size
                });
            case Category.ChapterHH:
                return await this.chapterHHsRepository.find({
                    where: {
                        commicId: cmId
                    },
                    take: size,
                    skip: (page - 1) * size
                });
            case Category.ChapterKA:
                return await this.chapterKAsRepository.find({
                    where: {
                        commicId: cmId
                    },
                    take: size,
                    skip: (page - 1) * size
                });
            case Category.ChapterKHI:
                return await this.chapterKHIsRepository.find({
                    where: {
                        commicId: cmId
                    },
                    take: size,
                    skip: (page - 1) * size
                });
            case Category.ChapterKH:
                return await this.chapterKHsRepository.find({
                    where: {
                        commicId: cmId
                    },
                    take: size,
                    skip: (page - 1) * size
                });
            case Category.ChapterTH:
                return await this.chapterTHsRepository.find({
                    where: {
                        commicId: cmId
                    },
                    take: size,
                    skip: (page - 1) * size
                });
            case Category.ChapterVD:
                return await this.chapterVDsRepository.find({
                    where: {
                        commicId: cmId
                    },
                    take: size,
                    skip: (page - 1) * size
                });
            case Category.ChapterHN:
                return await this.chapterHNssRepository.find({
                    where: {
                        commicId: cmId
                    },
                    take: size,
                    skip: (page - 1) * size
                });
            default:
                throw new Error('Invalid category');
        }
    }
}
