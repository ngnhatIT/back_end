import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Images } from "./entities/image.entity";

export class ImageService {
    constructor(
        @InjectRepository(Images)
        private comicsRepository: Repository<Images>,
    ) { }

    async findAllByCommidId(cmId:string): Promise<Images[]> {
        return await this.comicsRepository.find({
            where: {
                commicId: cmId
            },
        });
    }
}