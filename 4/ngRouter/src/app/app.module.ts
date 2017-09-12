import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Page404Component } from './page404/page404.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { ConsultComponent } from './consult/consult.component';
import {RoutInGuard} from "./stock/guard/rout.in.guard";
import {RoutOutGuard} from "./stock/guard/rout.out.guard";
import {RoutResolveGuard} from "./stock/guard/rout.resolve.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockComponent,
    Page404Component,
    FavoritesComponent,
    CompanyInfoComponent,
    ConsultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RoutInGuard,RoutOutGuard,RoutResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
