import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tube',
  templateUrl: './tube.component.html',
  styleUrls: ['./tube.component.css']
})
export class TubeComponent implements OnInit {
  public nowDateTime:any = new Date();
  public PI:number = 3.1415926575;

  constructor() { }

  ngOnInit() {
  }

}
