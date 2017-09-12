import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule, OpaqueToken} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavComponent} from './nav/nav.component';
import {ContentComponent} from './content/content.component';
import {StockManageComponent} from './stock/stock-manage/stock-manage.component';
import {StarsLevelComponent} from './stars-level/stars-level.component';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from './dashboard/dashboard.component';
import {Page404Component} from './page404/page404.component';
import {StockFormComponent} from './stock/stock-form/stock-form.component';
import {StockService} from "./stock/stock.service";
import {LoggerService} from "./common/logger.service";
import { StockFilterPipe } from './pipe/stock-filter.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import {AppConfig} from "./config/app-config";
export let LoggerServiceFactory = function (appConfig){
  return new LoggerService(appConfig);
};
const routeConfig: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard', component: DashboardComponent,
    data: {index: 1, title: 'Front End Pavilion--前端轩 首页', pageTitle: '首页', pageSubTitle: ''}
  },
  {
    path: 'stock', component: StockManageComponent,
    data: {index: 2, title: 'Front End Pavilion--前端轩 股票管理', pageTitle: '股票管理', pageSubTitle: '您可以管理您的股票'}
  },
  {
    path: 'stockInfo', component: StockFormComponent,
    data: {index: 2, title: 'Front End Pavilion--前端轩 股票信息', pageTitle: '', pageSubTitle: ''}
  },
  {
    path: '**', component: Page404Component,
    data: {index: 0, title: 'Front End Pavilion--前端轩 页面未找到', pageTitle: '页面未找到'}
  }
];

@NgModule({
  /*只能包含组件、指令、管道*/
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ContentComponent,
    StockManageComponent,
    StarsLevelComponent,
    DashboardComponent,
    Page404Component,
    StockFormComponent,
    StockFilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],
  /*依赖注入的一些服务*/
  providers: [
    {provide: AppConfig, useClass: AppConfig},
    {
      provide: LoggerService,
      useFactory:LoggerServiceFactory,
      deps:[AppConfig]
    },
    StockService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
