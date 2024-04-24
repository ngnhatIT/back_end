import { Controller, Get } from "@nestjs/common";
import { CommicService } from "./commic.service";
import { Commic } from "./commic.entity";

@Controller('commics')
export class CommicController {
    constructor(private readonly commicService: CommicService) { }

    @Get()
    async findAll(): Promise<Commic[]> {
        return this.commicService.findAll();
    }
}