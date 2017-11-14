import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CoreModule} from './core';
import {SharedModule} from './shared';
import {LoginModule} from './login';
import {AppComponent} from './app.component';
import { ProjectModule } from 'app/project';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LoginModule,
    CoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
