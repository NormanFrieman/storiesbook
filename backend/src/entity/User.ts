import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity{

    @PrimaryColumn()
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;
}
