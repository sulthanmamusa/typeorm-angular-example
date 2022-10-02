import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm/browser";
import { Category } from "./Category";
import type { Author } from "./Author";
import { CLASS } from 'typescript-class-helpers/browser'


@Entity()
@CLASS.NAME('Post')
export class Post {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title?: string;

  @Column("text")
  text?: string;

  @ManyToMany(type => Category, {
    cascade: true
  })
  @JoinTable()
  categories?: Category[];

  @ManyToOne(type => {
    const a = CLASS.getBy('Author') as typeof Author;
    console.log(a)
    return a;
  }, author => author.posts, {
    cascade: true
  })
  author?: Author;
}
