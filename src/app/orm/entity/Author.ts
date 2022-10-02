import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm/browser";
import { CLASS } from "typescript-class-helpers/browser";
import type { Post } from "./Post";


@Entity()
@CLASS.NAME('Author')
export class Author {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column({ nullable: true })
  birthdate?: Date;

  @OneToMany(type => {
    const p = CLASS.getBy('Post') as typeof Post;
    console.log(p)
    return p;
  }, post => post.author)
  posts?: Post[];
}
