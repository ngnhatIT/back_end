import { Body, Controller, Get, Param, Query } from "@nestjs/common";
import { ChapterService } from "./chapter.service";
import { SearchChapterRequestDTO, SearchChapterResponseDTO } from "./dto/search-chapter.dto";
import { Chapter } from "./entities/chapter.entity";

@Controller('chapters')
export class ChapterController {
  constructor(private readonly chapterEntityService: ChapterService) { }

  @Get(':category/:commicId')
  async findByCategory(@Param('category') category: string, @Param('commicId') commicId: string, @Query('page') page: number,
    @Query('size') size: number,): Promise<SearchChapterResponseDTO[]> {
    const chapters = await this.chapterEntityService.findByCategory(category, commicId, page, size);
    const searchResponDto = await Promise.all(
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