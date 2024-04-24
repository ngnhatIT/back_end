import { InjectRepository } from "@nestjs/typeorm";
import { Commic } from "./commic.entity";
import { Repository } from "typeorm";

export class CommicService {
    constructor(
        @InjectRepository(Commic)
        private comicsRepository: Repository<Commic>,
    ) { }

    async findAll(): Promise<Commic[]> {
        return await this.comicsRepository.find();
    }
}