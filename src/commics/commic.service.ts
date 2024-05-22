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

    async findCommicByID(commicId:string):Promise<Commics[]>{
        return await this.comicsRepository.find({
            where:{
                id:commicId
            }
        });
    }

    async findAllByCategory(category: string, page: number, size: number): Promise<Commics[]> {
        return await this.comicsRepository.find({
            take: size,
            skip: (page - 1) * size,
            where:{
                categoryId:category
            }
        });
    }
}