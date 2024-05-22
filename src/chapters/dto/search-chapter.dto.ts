export class SearchChapterResponseDTO{
    id:string;
    name:string;
    numberChapter:number;
}

export class SearchChapterRequestDTO{
    category : string;
    commicId : string;
    page: number;
    size:number;
}