import { Pipe, PipeTransform } from '@angular/core';
import {Stock} from "../stock/stock.service";
import {isNull, isNullOrUndefined, isUndefined} from "util";

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(stockList: Stock[], property?: any,keyword?:any): any {
    if(isNullOrUndefined(property)||isNullOrUndefined(keyword)){
      return stockList;
    }
    // return stockList;
    return stockList.filter( stock =>{
      let value = stock[property].toLowerCase();
      return value.indexOf(keyword) > 0;
    });
  }

}
