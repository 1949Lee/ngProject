import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      name:'李佳轩的跳槽计划',
      desc:'前端大神的成长计划',
      coverImg:'assets/img/covers/0.jpg'
    },
    {
      name:'李佳轩的跳槽计划',
      desc:'前端大神的成长计划',
      coverImg:'assets/img/covers/1.jpg'
    }
  ]
  constructor( private dialog:MdDialog) { }

  ngOnInit() {
  }
  openNewProjectDialog(){
    const dialogRef =  this.dialog.open(NewProjectComponent,{data:{dark:false}} );
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  openInviteDialog(){
    const dialogRef =  this.dialog.open(InviteComponent);
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

}
