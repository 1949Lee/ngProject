import { Injectable } from '@angular/core';

@Injectable()
export class StockService {
  private stocks:Stock[] = [
    new Stock(1, '股票1', 250, 3, '这是第一支股票', ['互联网', '金融']),
    new Stock(2, '股票2', 200, 4, '这是第二支股票', ['互联网', '医疗']),
    new Stock(3, '股票3', 150, 2, '这是第三支股票', ['互联网']),
    new Stock(4, '股票4', 350, 2, '这是第四支股票', ['互联网', '零售']),
    new Stock(5, '股票5', 300, 5, '这是第五支股票', ['游戏'])
  ];
  constructor() { }

  getStocks():Stock[]{
    return this.stocks;
  }
  getStock(id):Stock{
    let stock = this.stocks.find((stock) => stock.id == id);
    if(!stock){
      stock = new Stock(0,'',0,0,'',[]);
    }
    return stock;
  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public level: number,
              public desciption: string,
              public categories: Array<string>) {

  }

}
