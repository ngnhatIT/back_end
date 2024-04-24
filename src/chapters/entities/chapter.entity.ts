import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity as TypeOrmBaseEntity } from 'typeorm';

@Entity()
export class Chapter extends TypeOrmBaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ type: 'datetime', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' })
    createdDate: Date;

    @UpdateDateColumn({ type: 'datetime', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
    modifiedDate: Date;

    @Column('uuid')
    commicId: string;

    @Column('int')
    chapterNumber: number;

    @Column('text')
    name: string;

    @Column('text')
    content: string;
}