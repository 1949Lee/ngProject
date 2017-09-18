import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() onInvite:EventEmitter<void> = new EventEmitter<void>();
  @Output() modifyProject:EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteProject:EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onInviteClick(){
    this.onInvite.emit();
  }
  onModifyProject(){
    this.modifyProject.emit();
  }
  onDeleteProject(){
    this.deleteProject.emit();
  }

}
