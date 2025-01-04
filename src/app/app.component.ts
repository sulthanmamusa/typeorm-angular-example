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
    await orm();
  }
}
