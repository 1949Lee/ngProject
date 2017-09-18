import { Component, OnInit, Inject } from '@angular/core';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss']
})
export class NewTaskListComponent implements OnInit {
  title: string = '';

  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef:MdDialogRef<CopyTaskComponent>
  ) { }

  ngOnInit() {
    this.title = this.data.title;
  }

  save(){
    this.dialogRef.close('列表名称')
  }

}
