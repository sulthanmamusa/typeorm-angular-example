import initSqlJs from 'sql.js';
import { DataSource } from "typeorm";
import { Author, Category, Post } from "./entity";

export async function orm() {
    const SQL = await initSqlJs({
        locateFile: file => `https://sql.js.org/dist/${file}`
    });
    // @ts-ignore
    window['SQL'] = SQL;
    const dataSource = new DataSource({
        type: "sqljs",
        location: "/assets/test.db",
        autoSave: true,
        entities: [
            Author,
            Category,
            Post
        ],
        synchronize: true
      });    
      await dataSource.initialize();
      if (dataSource.hasMetadata(Post)){
        const postRepository = dataSource.getRepository(Post);
        const post = await postRepository.find();
        console.log(post);
      } else {
        const category1 = new Category();
        category1.name = "TypeScript";

        const category2 = new Category();
        category2.name = "Programming";

        const author = new Author();
        author.name = "Person";

        const post = new Post();
        post.title = "Control flow based type analysis";
        post.text = `TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.`;
        post.categories = [category1, category2];
        post.author = author;

        const postRepository = dataSource.getRepository(Post);
        await postRepository.save(post);
      }
}
