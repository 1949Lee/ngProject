import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { getDate } from "date-fns";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  today:string = 'day';
  @Output() sideNavItemClick:EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
    this.today = `day${getDate(new Date())}`;
  }

  onNavItemClick(){
    this.sideNavItemClick.emit();
  }

}
