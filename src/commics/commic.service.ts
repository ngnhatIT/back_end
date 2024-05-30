import { InjectRepository } from "@nestjs/typeorm";
import { Commics } from "./entities/commic.entity";
import { Repository, View } from "typeorm";

export class CommicService {
    constructor(
        @InjectRepository(Commics)
        private comicsRepository: Repository<Commics>,
    ) { }

    async findAll(page: number, size: number): Promise<Commics[]> {
        return await this.comicsRepository.find({
            take: size,
            skip: (page - 1) * size
        });
    }

    async findComplete(): Promise<Commics[]> {
        return await this.comicsRepository.find({
            where: {
                statusId: 'd120d14b-31f6-4707-8d0a-184f0fcb1229'
            }
        });
    }

    async findMostView(): Promise<Commics[]> {
        return await this.comicsRepository.find({
            take: 20,
            skip: 1,
            order: {
                view : "DESC"
            }
        });
    }

    async findRecommend(): Promise<Commics[]> {
        return await this.comicsRepository.find({
            where: {
                isRecommended: true
            }
        });
    }

    async findCommicByID(commicId: string): Promise<Commics[]> {
        return await this.comicsRepository.find({
            where: {
                id: commicId
            }
        });
    }

    async findAllByCategory(category: string, page: number, size: number): Promise<Commics[]> {
        return await this.comicsRepository.find({
            take: size,
            skip: (page - 1) * size,
            where: {
                categoryId: category
            }
        });
    }
}