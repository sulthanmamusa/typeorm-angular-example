import {Entity, PrimaryGeneratedColumn, Column} from "typeorm/browser";
import { CLASS } from "typescript-class-helpers/browser";


@Entity()
@CLASS.NAME('Category')
export class Category {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

}
