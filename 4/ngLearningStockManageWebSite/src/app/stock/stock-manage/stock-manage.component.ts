import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";
import {FormControl} from "@angular/forms";
import "rxjs";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  public stocks: Stock[];
  public searchIInputFormControl:FormControl = new FormControl();
  public keyWords: string;

  constructor(private router:Router,private stockService:StockService) {

  }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    this.searchIInputFormControl.valueChanges
      .debounceTime(700)
      .subscribe(value => {
        this.keyWords = value;
      })
  }

  newStock(){
    this.router.navigate(['/stockInfo'],{queryParams:{type:0}});
  }

  deleteStock(id:number){

  }

  modifyStock(stock:Stock){
    this.router.navigate(['./stockInfo'],{queryParams:{type:1,stockID:stock.id}});
  }

}


