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
  MdDialogModule,
  MdAutocompleteModule,
  MdMenuModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdDialogModule,
    MdSlideToggleModule,
    MdAutocompleteModule,
    MdGridListModule,
    MdMenuModule,
    MdInputModule
  ],
  exports: [ 
    CommonModule,
    MdIconModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdMenuModule,
    MdInputModule
  ],
  declarations: []
})
export class SharedModule { }
