import { Component } from '@angular/core';
import { orm } from './orm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'typeorm-angular-example';

  async ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    const initSqlJs = require('sql.js');
    // or if you are in a browser:
    // const initSqlJs = window.initSqlJs;

    const SQL = await initSqlJs({
      // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
      // You can omit locateFile completely when running in node
      // @ts-ignore
      locateFile: file => `https://sql.js.org/dist/${file}`
    });

    // @ts-ignore
    window['SQL'] = SQL;


    await orm()


  }
}
