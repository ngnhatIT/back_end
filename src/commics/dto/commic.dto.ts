export class CommicSearchDTO{
    id: string;
    name: string;
    author: string;
    authorId: string;
    description: string;
    totalChapter: number;
    status: string;
    category:string;
    statusId: string;
    categoryId:string;
    view: number;
    image150:string;
    image300:string;
    image600:string;
    imageDefault:string;
}

export class ResponseCommicHomeDTO{
    slide : CommicSearchDTO[];
    recommend : CommicSearchDTO[];
    commics : CommicSearchDTO[]
}