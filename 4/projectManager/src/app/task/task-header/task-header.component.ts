import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
  

  @Input() header: string = '';

  @Output() newTask: EventEmitter<void> = new EventEmitter<void>();
  @Output() moveAllLists: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteList: EventEmitter<void> = new EventEmitter<void>();
  @Output() modifyListName: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onNewTask(){
    this.newTask.emit();
  }
  onMoveAllLists(){
    this.moveAllLists.emit();
  }
  onDeleteList(){
    this.deleteList.emit();
  }
  onModifyListName(){
    this.modifyListName.emit();
  }

}
