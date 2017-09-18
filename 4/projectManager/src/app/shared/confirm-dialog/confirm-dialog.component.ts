import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
  <form>
    <h2 md-dialog-title>{{title}}</h2>
    <div md-dialog-content>
      {{content}}
    </div>
    <div md-dialog-actions>
      <button type="button" md-button md-dialog-close (click)="confirm(false)">取消</button>
      <button type="button" md-raised-button color="primary" (click)="confirm(true)">确定</button>
    </div>
  </form>
  `,
  styles: [`

  `]
})
export class ConfirmDialogComponent implements OnInit {
  title: string = '';
  content: string = '';

  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef:MdDialogRef<ConfirmDialogComponent>
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }
  confirm(result:boolean){
    this.dialogRef.close(result);
  }

}
