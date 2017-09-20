import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations:[
  //   trigger('animations1',[
  //     state('red',style({background:'red'})),
  //     state('green',style({background:'green'})),
  //     transition('green => red',animate('.8s cubic-bezier(0.77, 0, 0.175, 1)')),
  //     transition('red => green',animate('.8s cubic-bezier(0.77, 0, 0.175, 1)')),
  //   ]),
  //   trigger('animations2',[
  //     state('red',style({background:'red'})),
  //     state('green',style({background:'green'})),
  //     transition('green => red',animate('.8s cubic-bezier(0.77, 0, 0.175, 1)')),
  //     transition('red => green',animate(800, keyframes([
  //       style({transform:'translateY(100%)'}),
  //       style({transform:'translateY(75%)'}),
  //       style({transform:'translateY(50%)'}),
  //       style({transform:'translateY(25%)'}),
  //       style({transform:'translateY(0%)'}),
  //     ]))),
  //   ]),
  // ]
  
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
