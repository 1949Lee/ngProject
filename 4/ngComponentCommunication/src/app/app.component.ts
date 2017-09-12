import { Component } from '@angular/core';
import {StockInfo} from "./stock-seearch/stock-seearch.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lifeName = 'Lee';
  public search:string;
  public searchResult:StockInfo;
  public cartStock:StockInfo;
  constructor(){

  }
  ngInit(){

  }
  searchResultHandler(stockInfo:StockInfo){
    console.log(1);
    this.searchResult = stockInfo;
  }
  addCartStockInfoHandler(stockInfo:StockInfo){
    console.log(1);
    this.cartStock = stockInfo;
  }
}
