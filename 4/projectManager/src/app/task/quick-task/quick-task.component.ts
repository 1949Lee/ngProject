import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-quick-task',
  templateUrl: './quick-task.component.html',
  styleUrls: ['./quick-task.component.scss']
})
export class QuickTaskComponent implements OnInit {
  
  @Output()quikTask = new EventEmitter<string>();

  desc:string;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('keyup.enter')
  sendQuickTask(){
    if(isNullOrUndefined(this.desc)){
      return;
    }
    this.quikTask.emit(this.desc);
    this.desc = '';
  }

}
