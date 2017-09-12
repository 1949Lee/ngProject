import {Component, Input, OnInit} from '@angular/core';
import {StockInfo} from "../stock-seearch/stock-seearch.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input()
  public boughtStock:StockInfo;

  constructor() { }

  ngOnInit() {

  }

}
