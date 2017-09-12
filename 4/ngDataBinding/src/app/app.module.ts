import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RxJSComponent } from './rx-js/rx-js.component';
import { TubeComponent } from './tube/tube.component';
import { MultiplePipe } from './pipe/multiple.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    RxJSComponent,
    TubeComponent,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
