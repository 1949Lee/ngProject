import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";
import {LoggerService} from "../../common/logger.service";
import {AppConfig} from "../../config/app-config";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {$arryRequired, $minLength, $require} from "../../validators/commonValidators";
import {Observable} from "rxjs";
import {isNullOrUndefined} from "util";
import {factoryOrValue} from "rxjs/operator/multicast";


@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stock: Stock;
  public stockCategory: any = this.appConf.stockCategory;
  public formModule: FormGroup;

  constructor(private routeInfo: ActivatedRoute, private logger: LoggerService, private stockService: StockService, private appConf: AppConfig) {
  }

  ngOnInit() {
    let params;
    this.routeInfo.queryParams.subscribe((data: Params) => params = data);
    this.logger.log(params);
    let formBuilder = new FormBuilder();

    switch (params.type) {
      case '0':
        this.stock = new Stock(null, null, null, null, null, []);
        //新增股票
        break;
      case '1':
        //修改股票
        this.stock = this.stockService.getStock(params.stockID);
        break;
    }
    this.formModule = formBuilder.group({
      name: [this.stock.name, [$require({required: "股票名称必填"}), $minLength(3, {minLength: '股票至少三个字'})]],
      price: [this.stock.price, [$require({required: "股票价格必填"})]],
      description: [this.stock.desciption],
      categories: formBuilder.array([
        new FormControl(this.stockCategory.indexOf(this.stock.categories[0]) != -1),
        new FormControl(this.stockCategory.indexOf(this.stock.categories[1]) != -1),
        new FormControl(this.stockCategory.indexOf(this.stock.categories[2]) != -1),
        new FormControl(this.stockCategory.indexOf(this.stock.categories[3]) != -1),
        new FormControl(this.stockCategory.indexOf(this.stock.categories[4]) != -1)
      ],$arryRequired({required:"股票类型至少选择一项"}))
    });
    // this.logger.log(this.stock);
  }

  saveStockInfo() {
    if (this.formModule.valid) {
      this.formModule.value.level = this.stock.level;
      let categoryTem:Array<string> = [];
      this.formModule.get('categories').value.map((value,index)=>{
        if(value){
          categoryTem.push(this.stockCategory[index]);
        }
      });
      this.formModule.value.categories = categoryTem;
      this.formModule.value.id = this.stock.id;
      this.formModule.value.price = <number>this.formModule.value.price;
      // for(let key in this.formModule.value){
      //   this.stock[key] = this.formModule.value[key];
      // }
      // this.logger.log(this.stock);
      this.logger.log(this.formModule.value);

    }
    else {
      this.logger.log(this.formModule.get('name').errors);
    }
  }

  initCategoryCheckbox() {

  }
}
