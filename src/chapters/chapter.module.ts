import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChapterTHs } from "./entities/chapter-ths.entity";
import { ChapterService } from "./chapter.service";
import { ChapterController } from "./chapter.controller";
import { ChapterCKs } from "./entities/chapter-cks.entity";
import { ChapterDNs } from "./entities/chapter-dns.entity";
import { ChapterDSs } from "./entities/chapter-dss.entity";
import { ChapterDTs } from "./entities/chapter-dts.entity";
import { ChapterHHs } from "./entities/chapter-hhs.entity";
import { ChapterKAs } from "./entities/chapter-kas.entity";
import { ChapterKHIs } from "./entities/chapter-khis.entity";
import { ChapterKHs } from "./entities/chapter-khs.entity";
import { ChapterVDs } from "./entities/chapter-vds.entity";
import { ChapterHNs } from "./entities/chapter-hns.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([ChapterTHs, ChapterCKs, ChapterDNs, ChapterDSs, ChapterDTs, ChapterHHs, ChapterKAs, ChapterKHIs, ChapterKHs, ChapterVDs, ChapterHNs]),
    ],
    providers: [ChapterService],
    controllers: [ChapterController],
})
export class ChapterModule { }