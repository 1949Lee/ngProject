import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable()
export class StockService {

  constructor(public logger:LoggerService) { }
  getStock():Stock{
    this.logger.log('StockService:开始调用getStock方法');
     return new Stock(1,'Front End Pavilion')
  }

}

export class Stock{
  constructor(
    public id:number,
    public name:string,
    ){

  }
}
