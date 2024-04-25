import { Controller, Get, Param, Query } from "@nestjs/common";
import { ChapterService } from "./chapter.service";
import * as jwt from 'jsonwebtoken';

@Controller('chapters')
export class ChapterController {
    constructor(private readonly chapterEntityService: ChapterService) { }

    @Get()
    async findByCategory( @Query('category') category: string,
    @Query('comicId') comicId: string, @Query('jwt') jwt: string,) {
        let code = this.validDateJwt(jwt);
        console.log(code);
        return this.chapterEntityService.findByCategory(category,comicId);
    }

     validDateJwt(jwtCode:string):string|jwt.JwtPayload{
        return jwt.verify(jwtCode, 'Tfa4oeLbCPfEEYpcPMZt');
    }
}