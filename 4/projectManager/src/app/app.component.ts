import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darked = false;
  switchTheme(darked) {
    console.log(darked);
    this.darked = darked;
  }
}
