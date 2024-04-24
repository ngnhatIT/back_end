import { Controller, Get } from "@nestjs/common";
import { CommicService } from "./commic.service";
import { Commics } from "./commic.entity";

@Controller('commics')
export class CommicController {
    constructor(private readonly commicService: CommicService) { }

    @Get()
    async findAll(): Promise<Commics[]> {
        return this.commicService.findAll();
    }
}