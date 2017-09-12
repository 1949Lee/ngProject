import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  // public stockID: number;
  public stock: Stock;

  private marked: boolean = false;

  constructor(private routerInfo:ActivatedRoute) { }

  ngOnInit() {
    // this.stockID = this.routerInfo.snapshot.params['id'];
    console.log('成功了');
    this.routerInfo.data.subscribe((data:{stock:Stock})=>{
      console.log(data.stock);
      this.stock = data.stock;
    })

    // this.routerInfo.params.subscribe((param:Params)=>{this.stock = data.id})
  }

  mark(){
    this.marked = true;
  }

  isMarked(){
    return this.marked;
  }

}
export class Stock{
  constructor(public id:number,public name:string){

  }
}
