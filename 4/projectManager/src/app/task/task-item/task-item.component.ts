import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { itemAnimations } from '../../animations/item.animations';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations:[
    itemAnimations
  ]
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avatar;
  @Output() modifyTask:EventEmitter<void> = new EventEmitter<void>();
  itemAnimateState = 'out';

  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar:'unassigned';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.itemAnimateState = 'hover';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.itemAnimateState = 'out';
  }

  onItemClick(){
    this.modifyTask.emit();
  }
  onCompleteCheckboxCLick(event){
    event.stopPropagation();
  }
}
