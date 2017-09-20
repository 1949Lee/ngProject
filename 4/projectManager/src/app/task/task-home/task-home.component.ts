import { Component, OnInit, HostBinding } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from '../../animations/routing.animations';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations:[
    slideToRight
  ]
})
export class TaskHomeComponent implements OnInit {

  taskLists = [
    {
      id: 1,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务三:完成管理界面搭建',
          priority:2,
          completed:true,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder:new Date()
        },
        {
          id: 2, desc: '任务四:完成统计界面搭建',
          completed:false,
          priority:1,
          owner: {
            id: 1,
            name: '李四',
            // avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 2,
      name: '已完成',
      tasks: [
        {
          id: 1,
          desc: '任务一:完成路由搭建',
          completed:false,
          priority:3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务二:完成首页界面搭建',
          completed:false,
          priority:3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        }
      ]
    }
  ]
  @HostBinding('@routeAnimations') routeAnimateState; 
  constructor(private dialog:MdDialog) { }

  ngOnInit() {
  }
  newTask(){
    const dialogRef = this.dialog.open(NewTaskComponent,{
      width:'20rem',
      data:{
        title:'新建任务',
      }
    });
  }
  moveAllLists(){
    const dialogRef = this.dialog.open(CopyTaskComponent,{
      data:{
        lists:this.taskLists
      }
    })
  }
  modifyTask(task){
    const dialogRef =  this.dialog.open(NewTaskComponent,{
      width:'20rem',
      data:{
        title:'修改任务',
        task:task
      }
    });
  }
  deleteList(){
    const dialogRef =  this.dialog.open(ConfirmDialogComponent,{data:{title:'删除该项目吗',content:'您确定删除该项目吗?'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  modufyListName(){
    const dialogRef =  this.dialog.open(NewTaskListComponent,{
      data:{
        title:'修改列表名称'
      }
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  openNewTaskList(){
    const dialogRef =  this.dialog.open(NewTaskListComponent,{
      data:{
        title:'新建列表'
      }
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

}
