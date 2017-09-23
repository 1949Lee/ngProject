import { Component, OnInit, HostBinding, AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from '../../animations/routing.animations';
import { listAnimations } from '../../animations/list.animations';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  animations:[
    slideToRight,
    listAnimations
  ]
})
export class ProjectListComponent implements OnInit,AfterContentInit {

  projects = [
    {
      id:'1',
      name:'李佳轩的跳槽计划1',
      desc:'前端大神的成长计划1',
      coverImg:'assets/img/covers/0.jpg'
    },
    {
      id:'2',
      name:'李佳轩的跳槽计划2',
      desc:'前端大神的成长计划2',
      coverImg:'assets/img/covers/1.jpg'
    }
  ]
  @HostBinding('@routeAnimations') routeAnimateState; 
  constructor( private dialog:MdDialog,private cd:ChangeDetectorRef) { }

  ngOnInit() {
    
  }

  ngAfterContentInit(): void {
    console.log(1);
  }


  openNewProjectDialog(){
    const dialogRef =  this.dialog.open(NewProjectComponent,{data:{title:'新建项目'}} );
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result){
        this.projects = [... this.projects,{
          id:'3',
          name:'李佳轩的跳槽计划3',
          desc:'前端大神的成长计划3',
          coverImg:'assets/img/covers/2.jpg'
        }];
        this.cd.markForCheck();
      }
    });
  }
  openInviteDialog(){
    const dialogRef =  this.dialog.open(InviteComponent);
    dialogRef.afterClosed().subscribe(result => console.log(result));
    this.cd.markForCheck();
  }
  modifyProject(){
    const dialogRef =  this.dialog.open(NewProjectComponent,{data:{title:'编辑项目'}});
    this.cd.markForCheck();
    // dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  deleteProject(project){
    const dialogRef =  this.dialog.open(ConfirmDialogComponent,{data:{title:'删除该项目吗',content:'您确定删除该项目吗?'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result){
        this.projects = this.projects.filter(p => p.id !== project.id);
        this.cd.markForCheck();
      }
    });
  }

}
