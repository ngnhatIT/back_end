import { Body, Controller, Get, Param, Query } from "@nestjs/common";
import { ChapterService } from "./chapter.service";
import {  SearchChapterRequestDTO, SearchChapterResponseDTO } from "./dto/search-chapter.dto";
import { Chapter } from "./entities/chapter.entity";

@Controller('chapters')
export class ChapterController {
    constructor(private readonly chapterEntityService: ChapterService) { }

    @Get()
    async findByCategory(@Body() request:SearchChapterRequestDTO) : Promise<SearchChapterResponseDTO[]> {
        const category = request.category;
        const commicId = request.commicId;
        const page = request.page;
        const size = request.size;
      
        const chapters = await this.chapterEntityService.findByCategory(category, commicId,page,size);
        const searchResponDto =  await Promise.all(
            chapters.map(async (chapter) => this.mapChapterToDTO(chapter)),
          );
        return searchResponDto;
    }


    private async mapChapterToDTO(chapter: Chapter): Promise<SearchChapterResponseDTO> {
        const chapterDTO = new SearchChapterResponseDTO();
        chapterDTO.id = chapter.id;
        chapterDTO.name = chapter.name;
        chapterDTO.numberChapter = chapter.numberChapter;
        return chapterDTO;
      }
}