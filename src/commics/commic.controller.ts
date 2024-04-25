import { Controller, Get, Param, Query } from "@nestjs/common";
import { CommicService } from "./commic.service";
import { Commics } from "./commic.entity";
import * as jwt from 'jsonwebtoken';
import { ConfigService } from "@nestjs/config";


@Controller('commics')
export class CommicController {
    constructor(private readonly commicService: CommicService,private configService: ConfigService) { }

    @Get()
    async findAll(
        @Query('page') page: number,
        @Query('size') size: number,
    ): Promise<Commics[]> {
        const port = this.configService.get<number>('PORT', 3000);
        console.log(port);
        return this.commicService.findAll(page,size);
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