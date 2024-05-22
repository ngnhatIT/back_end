import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Images {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    commicId: string;

    @Column('text')
    link150: string;

    @Column('text')
    link300: string;

    @Column('text')
    link600: string;

    @Column('text')
    linkDefault: string;
}