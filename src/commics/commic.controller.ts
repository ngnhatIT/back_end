import { Controller, Get, Param, Query } from "@nestjs/common";
import { CommicService } from "./commic.service";
import { Commics } from "./commic.entity";
import * as jwt from 'jsonwebtoken';
import { ApiKey } from "src/apikey/apikey.entity";


@Controller('commics')
export class CommicController {
    constructor(private readonly commicService: CommicService) { }

    @Get()
    async findAll(
        @Query('page') page: number,
        @Query('size') size: number,
    ): Promise<Commics[]> {
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