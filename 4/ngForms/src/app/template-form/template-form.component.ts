import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit,AfterViewInit {

  @ViewChild('myForm') form;

  constructor() { }

  ngOnInit() {
    // console.log(this.form);
  }

  ngAfterViewInit(){
    console.log(this.form);
  }

  register(info:any){
    console.log(info);
  }

}
