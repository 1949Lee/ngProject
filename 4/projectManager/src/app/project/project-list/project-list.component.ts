import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

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
    const dialogRef =  this.dialog.open(NewProjectComponent,{data:{title:'新建项目'}} );
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  openInviteDialog(){
    const dialogRef =  this.dialog.open(InviteComponent);
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  modifyProject(){
    const dialogRef =  this.dialog.open(NewProjectComponent,{data:{title:'编辑项目'}});
    // dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  deleteProject(){
    const dialogRef =  this.dialog.open(ConfirmDialogComponent,{data:{title:'删除该项目吗',content:'您确定删除该项目吗?'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

}
