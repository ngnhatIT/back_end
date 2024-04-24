import { InjectRepository } from "@nestjs/typeorm";
import { Commics } from "./commic.entity";
import { Repository } from "typeorm";

export class CommicService {
    constructor(
        @InjectRepository(Commics)
        private comicsRepository: Repository<Commics>,
    ) { }

    async findAll(): Promise<Commics[]> {
        return await this.comicsRepository.find();
    }
}