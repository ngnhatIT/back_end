import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'Commics' })
export class Commics {
    @PrimaryColumn({ name: 'Id', type: 'char', length: 36 })
    id: string;

    @Column({ name: 'CategoryId', type: 'char', length: 36 })
    categoryId: string;

    @Column({ name: 'AuthorId', type: 'char', length: 36 })
    authorId: string;

    @Column({ name: 'StatusId', type: 'char', length: 36 })
    statusId: string;

    @Column({ name: 'Name', type: 'longtext' })
    name: string;

    @Column({ name: 'Author', type: 'longtext' })
    author: string;

    @Column({ name: 'Description', type: 'longtext' })
    description: string;

    @Column({ name: 'TotalChapter', type: 'int' })
    totalChapter: number;

    @Column({ name: 'Status', type: 'longtext' })
    status: string;

    @Column({ name: 'IsActive', type: 'tinyint' })
    isActive: boolean;

    @Column({ name: 'View', type: 'int' })
    view: string;

    @Column({ name: 'IsQuality', type: 'tinyint' })
    isQuality: boolean;

    @Column({ name: 'IsSlide', type: 'tinyint' })
    isSlide: boolean;

    @Column({ name: 'IsRecommended', type: 'tinyint' })
    isRecommended: boolean;
}
