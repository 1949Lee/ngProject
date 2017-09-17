import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darked = false;
  constructor(private oc:OverlayContainer){

  }
  switchTheme(darked) {
    console.log(darked);
    this.darked = darked;
    this.oc.themeClass = this.darked ? 'dark-theme' :null;
  }
}
