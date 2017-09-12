import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-stock-seearch',
  templateUrl: './stock-seearch.component.html',
  styleUrls: ['./stock-seearch.component.css']
})
export class StockSeearchComponent implements OnInit,OnChanges {


  index: number;
  @Input()
  public keyWords:string;
  @Output('searchResult')
  public searchResult:EventEmitter<StockInfo> = new EventEmitter();
  @Output('addCartStockInfo')
  public addCartStockInfo:EventEmitter<StockInfo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.index = 1;
    // setInterval(()=>{
      if(!isNullOrUndefined(this.keyWords)){
        this.searchResult.emit(new StockInfo(this.keyWords,this.index++));
      }
    // },3000)

  }
  ngOnChanges(changes:SimpleChanges){
    if(!isNullOrUndefined(this.keyWords)){
      console.log(1)
      this.searchResult.emit(new StockInfo(this.keyWords,this.index++));
    }
  }
  addCart(){
    this.addCartStockInfo.emit(new StockInfo(this.keyWords,this.index++));
  }

}
export class StockInfo {
  constructor(
    public name:string,
    public price:number,
              ){

}
}
