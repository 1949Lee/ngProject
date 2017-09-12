import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {User} from "./child/child.component";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked,AfterContentChecked,AfterContentInit {


  title = 'app';
  public greeting: string = `Hello World`;
  public loadingText: string = `loading`;
  public user: User = new User('Lee');
  public clickCount:number;

  constructor() {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('父组件AfterViewInit调用完成');
    setTimeout(() => {
      this.loadingText = '加载成功';
    }, 0);
    document.getElementsByClassName('loader')[0].className = 'loading  hide';
  }

  ngAfterViewChecked(): void {
    console.log('父组件AfterViewChecked调用完成')
  }

  ngAfterContentChecked(): void {
    console.log(`父组件投影内容检测完成`);
  }

  ngAfterContentInit(): void {
    console.log(`父组件投影内容初始化完成`);
  }

  add(){
    if(isNullOrUndefined(this.clickCount)){
      this.clickCount = 1;
    }
    else{
      this.clickCount++;
    }
  }
}
