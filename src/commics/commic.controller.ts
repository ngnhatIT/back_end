import { Controller, Get, Param, Query } from "@nestjs/common";
import { CommicService } from "./commic.service";
import { CommicDTO, CommicSearchDTO } from "./dto/commic.dto";
import { ImageService } from "src/images/image.service";
import { Commics } from "./entities/commic.entity";

@Controller('commics')
export class CommicController {
  constructor(
    private readonly commicService: CommicService,
    private readonly imageService: ImageService,
  ) { }

  @Get('/all')
  async findAll(
    @Query('page') page: number,
    @Query('size') size: number,
  ): Promise<CommicSearchDTO[]> {
    const commics = await this.commicService.findAll(page, size);
    const commicSearchDTOs = await Promise.all(
      commics.map(async (commic) => this.mapCommicToDTO(commic)),
    );
    return commicSearchDTOs;
  }

  @Get()
  async findSlide(): Promise<CommicDTO> {
    const slide = await this.commicService.findSlide();
    const recommend = await this.commicService.findSlide();
    const mostview = await this.commicService.findMostView();
    const slideDTO = await Promise.all(
      slide.map(async (commic) => this.mapCommicToDTO(commic)),
    );
    const recommendDTO = await Promise.all(
      recommend.map(async (commic) => this.mapCommicToDTO(commic)),
    );

    const mostViewDTO  =  await Promise.all(
      mostview.map(async (commic) => this.mapCommicToDTO(commic)),
    );

    let result = new CommicDTO();
    result.slide = slideDTO;
    result.recommend = recommendDTO;
    result.mostview = mostViewDTO;
    return result;
  }

  @Get(':category')
  async findCommicByCategory(
    @Param('category') category: string,
    @Query('page') page: number,
    @Query('size') size: number,
  ): Promise<Commics[]> {
    return this.commicService.findAllByCategory(category, page, size);
  }

  private async mapCommicToDTO(commic: Commics): Promise<CommicSearchDTO> {
    const commicSearchDTO = new CommicSearchDTO();
    commicSearchDTO.id = commic.id;
    commicSearchDTO.author = commic.author;
    commicSearchDTO.description = commic.description;
    commicSearchDTO.totalChapter = commic.totalChapter;
    commicSearchDTO.name = commic.name;
    commicSearchDTO.status = commic.status;
    commicSearchDTO.view = commic.view;
    commicSearchDTO.authorId = commic.authorId;
    commicSearchDTO.categoryId = commic.categoryId;
    commicSearchDTO.category = commic.category;
    commicSearchDTO.statusId = commic.statusId;

    const images = await this.imageService.findAllByCommidId(commic.id);
    if (images.length > 0) {
      const image = images[0];
      commicSearchDTO.image150 = image.link150;
      commicSearchDTO.image300 = image.link300;
      commicSearchDTO.image600 = image.link600;
      commicSearchDTO.imageDefault = image.linkDefault;
    }

    return commicSearchDTO;
  }
}