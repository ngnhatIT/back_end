import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'Commics' })
export class Commic {
    @PrimaryColumn({ type: 'char', length: 36 })
    id: string;

    @Column({ type: 'varchar', length: 255 })
    link: string;

    @Column({ type: 'longtext' })
    name: string;

    @Column({ name: 'LinkImage', type: 'longtext' })
    linkImage: string;

    @Column({ type: 'longtext' })
    author: string;

    @Column({ type: 'longtext' })
    description: string;

    @Column({ name: 'LengthChapter', type: 'int' })
    lengthChapter: number;

    @Column({ type: 'longtext' })
    status: string;

    @Column({ type: 'longtext' })
    category: string;

    @Column({ type: 'longtext' })
    rating: string;

    @Column({ type: 'longtext' })
    performance: string;

    @Column({ type: 'longtext' })
    reads: string;

    @Column({ type: 'longtext' })
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