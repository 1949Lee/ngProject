import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { cardAnimations } from '../../animations/card.animations';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnimations
  ]
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() onInvite: EventEmitter<void> = new EventEmitter<void>();
  @Output() modifyProject: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteProject: EventEmitter<void> = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cardState = 'out';
  }

  onInviteClick() {
    this.onInvite.emit();
  }
  onModifyProject() {
    this.modifyProject.emit();
  }
  onDeleteProject() {
    this.deleteProject.emit();
  }

}
