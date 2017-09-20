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
  MdCheckboxModule,
  MdTooltipModule,
  MdNativeDateModule,
  MdDatepickerModule,
  MdSelectModule,
  MdRadioModule,
  MdSidenavModule,
} from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

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
    MdCheckboxModule,
    MdRadioModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule,
    MdInputModule,
    MdSidenavModule
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
    MdCheckboxModule,
    MdTooltipModule,
    MdRadioModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule,
    MdInputModule,
    MdSidenavModule
  ],
  entryComponents:[
    ConfirmDialogComponent,
  ],
  declarations: [ConfirmDialogComponent]
})
export class SharedModule { }
