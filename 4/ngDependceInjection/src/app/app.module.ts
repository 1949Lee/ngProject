import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StockComponent} from './stock/stock.component';
import {StockService} from "./shared/stock.service";
import {Stock2Component} from './stock2/stock2.component';
import {LoggerService} from "./shared/logger.service";

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    Stock2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: StockService, useClass: StockService},
    {
      provide: LoggerService,
      useFactory:
        (isDevEnv) => {
          return new LoggerService(isDevEnv);
        },
      deps: ['isDevEnv']
    },
    {
      provide: 'isDevEnv',
      useValue: true
    }],

  bootstrap: [AppComponent]
})
export class AppModule {
}
