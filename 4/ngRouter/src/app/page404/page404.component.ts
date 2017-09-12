import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {
  public title: string;
  public content: string;

  constructor(private routerInfo: ActivatedRoute) {

  }

  ngOnInit() {
    this.title = this.routerInfo.snapshot.data[0]['title'];
    this.content = this.routerInfo.snapshot.data[0]['content'];
  }

}
