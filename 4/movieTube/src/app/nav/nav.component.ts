import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menus:Array<menu>;
  currentMenu:CurrentMenu = new CurrentMenu();
  constructor(private router:Router,private activeRouter:ActivatedRoute,private titleService:Title) { }

  ngOnInit() {
    this.menus = [
      new menu(1,'首页','dashboard','icon-home','首页'),
      new menu(2,'股票管理','stock','icon-home','股票管理'),
    ];
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activeRouter)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        this.titleService.setTitle(event['title']);
        this.currentMenu.index = event['index'];
      });
  }

  nav (menu:menu){
    this.router.navigateByUrl(menu.link);
    this.currentMenu.index= menu.id;
  }

}

export class menu{
  constructor(
    public id:number,
    public name:string,
    public link:string,
    public icon:string,
    public pageTitle:string
              ){

  }
}

export class CurrentMenu{
  public index:number;
   constructor(
   ){

   }
}

