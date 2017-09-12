import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()sidebarToggle = new EventEmitter<void>();
  @Output()darkThemeToggle = new EventEmitter<boolean>();
  constructor() { 
  }

  ngOnInit() {
  }
  openSidebar(){
    this.sidebarToggle.emit();
  }
  onDarkTheme(checked:boolean){
    this.darkThemeToggle.emit(checked);
  }
}
