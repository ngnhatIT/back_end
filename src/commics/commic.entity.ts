import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'Commics' })
export class Commics {
    @PrimaryColumn({ name: 'Id', type: 'char', length: 36 })
    id: string;

    @Column({ name: 'Link', type: 'varchar', length: 255 })
    link: string;

    @Column({ name: 'Name', type: 'longtext' })
    name: string;

    @Column({ name: 'LinkImage', type: 'longtext' })
    linkImage: string;

    @Column({ name: 'Author', type: 'longtext' })
    author: string;

    @Column({ name: 'Description', type: 'longtext' })
    description: string;

    @Column({ name: 'LengthChapter', type: 'int' })
    lengthChapter: number;

    @Column({ name: 'Status', type: 'longtext' })
    status: string;

    @Column({ name: 'Category', type: 'longtext' })
    category: string;

    @Column({ name: 'Rating', type: 'longtext' })
    rating: string;

    @Column({ name: 'Performance', type: 'longtext' })
    performance: string;

    @Column({ name: 'Reads', type: 'longtext' })
    reads: string;

    @Column({ name: 'Motips', type: 'longtext' })
    motips: string;

    @Column({ name: 'IsActive', type: 'tinyint' })
    isActive: boolean;

    @Column({ name: 'CategoryEnum', type: 'int' })
    categoryEnum: number;

    @CreateDateColumn({ name: 'CreatedDate', type: 'datetime', precision: 6 })
    createdDate: Date;

    @UpdateDateColumn({ name: 'ModifiedDate', type: 'datetime', precision: 6 })
    modifiedDate: Date;
}
