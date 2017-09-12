import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  public title: any;

  constructor(private routerInfo:ActivatedRoute) { }

  ngOnInit() {
    this.title = this.routerInfo.snapshot.params['title']
  }

}
