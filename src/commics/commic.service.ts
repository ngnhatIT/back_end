import { InjectRepository } from "@nestjs/typeorm";
import { Commics } from "./commic.entity";
import { Repository } from "typeorm";

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

    async findAllByCategory(category: number, page: number, size: number): Promise<Commics[]> {
        return await this.comicsRepository.find({

            take: size,
            skip: (page - 1) * size
        });
    }
}