import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoggerService} from "../common/logger.service";

@Component({
  selector: 'app-stars-level',
  templateUrl: './stars-level.component.html',
  styleUrls: ['./stars-level.component.css']
})
export class StarsLevelComponent implements OnInit {

  public stars: boolean[];
  @Input() private level:number;
  //直接将输入属性的对应输出变量的名称做好的对应，即可在使用子组件时直接双向绑定输入属性
  //从而不用再父组件中调用。
  // 如例子中星级评价子组件的输入属性有level，然后对应的输出属性为levelChange，
  // 这样调用星级评价组件时可以直接使用[(level)]来实现双向绑定。
  // 而不用在股票编辑组件里去捕获levelChange发射（emit）的值。
  @Output() private levelChange:EventEmitter<number> = new EventEmitter();
  @Input() public readonly :boolean = true;
  constructor(private logger:LoggerService) {

  }

  drawStarsArray(){
    this.stars = [];
    for(let i = 0;i < 5;i++){
      this.stars.push(i + 1 > this.level);
    }
  }

  ngOnInit() {
    this.drawStarsArray();
  }

  changeLevel(level:number){
    if(!this.readonly){
      this.logger.log(level);
      this.level = level;
      this.drawStarsArray();
      this.levelChange.emit(this.level);
    }
  }


}
