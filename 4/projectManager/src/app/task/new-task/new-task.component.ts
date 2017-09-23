import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { CopyTaskComponent } from '../copy-task/copy-task.component';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class NewTaskComponent implements OnInit {
  task: string = '';
  title: any = null;

  priorities = [
    {
      label:'普通',
      value:1
    },
    {
      label:'重要',
      value:2
    },
    {
      label:'紧急',
      value:3
    }
  ]

  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef:MdDialogRef<CopyTaskComponent>
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    // this.task = this.data.task;
  }

}
