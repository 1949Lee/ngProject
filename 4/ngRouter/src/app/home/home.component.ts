import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public status:string;
  constructor(private routerInfo:ActivatedRoute) { }

  ngOnInit() {
    this.status = this.routerInfo.snapshot.queryParams['userStatus'];
    // this.routerInfo.queryParams.subscribe((param:Params) =>{
    //   console.log(param);
    //   this.status = param['userStatus'];
    // })
  }

}
