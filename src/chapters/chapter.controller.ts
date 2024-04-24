import { Controller, Get, Param } from "@nestjs/common";
import { ChapterService } from "./chapter.service";

@Controller('chapters')
export class ChapterController {
    constructor(private readonly chapterEntityService: ChapterService) { }

    @Get(':category')
    async findByCategory(@Param('category') category: string) {
        return this.chapterEntityService.findByCategory(category);
    }
}