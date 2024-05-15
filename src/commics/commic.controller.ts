import { Controller, Get, Param, Query } from "@nestjs/common";
import { CommicService } from "./commic.service";
import { Commics } from "./commic.entity";
import * as jwt from 'jsonwebtoken';
import { ConfigService } from "@nestjs/config";
import { CommicSearchDTO } from "./commic.dto";
import { ImageService } from "src/image/image.service";


@Controller('commics')
export class CommicController {
    constructor(private readonly commicService: CommicService,private readonly imageService: ImageService,private configService: ConfigService) { }

    @Get()
    async findAll(
        @Query('page') page: number,
        @Query('size') size: number,
    ): Promise<CommicSearchDTO[]> {
        const commic= await this.commicService.findAll(page,size);
        const dataWithImages = await Promise.all(
            commic.map(async (item) => {
                const commicSearchDTO = new CommicSearchDTO();
                commicSearchDTO.id = item.id;
                commicSearchDTO.author = item.author;
                commicSearchDTO.description = item.description;
                commicSearchDTO.totalChapter = item.totalChapter;
                commicSearchDTO.name = item.name;
                commicSearchDTO.status = item.status;
                commicSearchDTO.view = item.view;
                commicSearchDTO.authorId = item.authorId;
                commicSearchDTO.categoryId = item.categoryId;
                commicSearchDTO.category = item.category;
                commicSearchDTO.statusId = item.statusId;
                const images = await this.imageService.findAllByCommidId(item.id);
                commicSearchDTO.image150 = images[0].link150;
                commicSearchDTO.image300 = images[0].link300;
                commicSearchDTO.image600 = images[0].link600;
                commicSearchDTO.imageDefault = images[0].linkDefault;
                return commicSearchDTO;
            })
          );
        return dataWithImages;
    }

    @Get(':category')
    async findCommicByCategory(
        @Param('category') category: number,
        @Query('page') page: number,
        @Query('size') size: number,
    ): Promise<Commics[]> {
        return this.commicService.findAllByCategory(category,page,size);
    }

    async validDateJwt(jwtCode:string):Promise<jwt.JwtPayload>{
        const value = jwt.verify(jwtCode, 'Tfa4oeLbCPfEEYpcPMZt') as jwt.JwtPayload;
        return value;
    }
}