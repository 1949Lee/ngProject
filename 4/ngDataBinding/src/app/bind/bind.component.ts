import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  public text: string = "";
  public dClassFlag: boolean = true;
  public inputStyle: any = {
    color:'red',
    border:'1px dotted'
  };

  constructor() {
  }

  ngOnInit() {
  }

  doOnClick(event: any) {
    console.log(event);
  }

  doOnUp(event: any) {
    // console.log(event.target.value);//DOM属性会变化
    this.text = event.target.value;
    // console.log(event.target.getAttribute('value'))//HTML属性一直不变
  }
  doOnUpID(value) {
    // console.log(event.target.value);//DOM属性会变化
    console.log(value)
    // console.log(event.target.getAttribute('value'))//HTML属性一直不变

  }
}
