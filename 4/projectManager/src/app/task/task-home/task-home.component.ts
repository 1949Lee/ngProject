import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
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

  constructor() { }

  ngOnInit() {
  }

}
