import { NgModule, Optional, SkipSelf } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from "../app-routing.module";
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { loadSVGResources } from '../utils/svg.utils'
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import 'hammerjs';
import 'rxjs/add/operator/take';
import { ServicesModule } from '../services/services.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    HttpModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
  ],
  exports: [
    SharedModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule
  ],
  declarations: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MdIconRegistry,
    ds: DomSanitizer) {
    if (parent) {
      throw new Error(`核心模块已存在，无需再次加载`);
    }
    loadSVGResources(ir, ds);
  }
}
