import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockSeearchComponent } from './stock-seearch/stock-seearch.component';
import {FormsModule} from "@angular/forms";
import { CartComponent } from './cart/cart.component';
import { LifeComponent } from './life/life.component';

@NgModule({
  declarations: [
    AppComponent,
    StockSeearchComponent,
    CartComponent,
    LifeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
