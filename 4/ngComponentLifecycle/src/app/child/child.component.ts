import {
  AfterContentChecked, AfterContentInit,
  AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentChecked,AfterContentInit,OnDestroy {

  @Input()
  public greeting:string;

  @Input()
  public user:User;
  public message:string;

  public oldUserName:string;

  public changeDetected:boolean;

  public changeCount:number = 0;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes,null,2));
  }
  ngDoCheck(): void {

    if(this.user.name !== this.oldUserName) {
      this.changeDetected = true;
      console.log("DoCheck: stock.name 从"+this.oldUserName+"变为 "+this.user.name);
      this.oldUserName = this.user.name;
    }

    if(this.changeDetected) {
      this.changeCount = 0;
    }else{
      this.changeCount = this.changeCount + 1;
      console.log("DoCheck: user.name 没变化时，ngDoCheck方法被调用了"+this.changeCount+"次");
    }

    this.changeDetected = false;

  }
  ngAfterViewInit(): void {
    console.log('子组件AfterViewInit调用完成')
  }

  ngAfterViewChecked(): void {
    console.log('子组件AfterViewChecked调用完成')
  }

  ngAfterContentChecked(): void {
    console.log(`子组件投影内容检测完成`);
  }

  ngAfterContentInit(): void {
    console.log(`子组件投影内容初始化完成`);
  }

  //路由中，切换路由时触发
  ngOnDestroy(): void {

  }

}
export class User{
  constructor(
    public name:string
  ){

  }
}
