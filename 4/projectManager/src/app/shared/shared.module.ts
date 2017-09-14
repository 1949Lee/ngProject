import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../core/core.module";
import {
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdListModule,
  MdCardModule,
  MdInputModule,
  MdSlideToggleModule,
  MdGridListModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdInputModule
  ],
  exports: [ 
    CommonModule,
    MdIconModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdInputModule
  ],
  declarations: []
})
export class SharedModule { }
