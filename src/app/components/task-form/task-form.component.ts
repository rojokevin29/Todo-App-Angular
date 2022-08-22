import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  tasks: Task[] = [];
  
  constructor(
    public taskService: TaskService

  ) { }
   

  ngOnInit(): void {


  }

  

  addTask(newTitle: any, newDescription: any,newDate: any) {
    
    this.taskService.addTask({
      title: newTitle.value, description: newDescription.value, hide: true,
      finished: false,
      edit: true,
      createdAt: newDate.value,
      idUser: 0,
      posicion: 0
    });
    newTitle.value = '';
    newDescription.value = '';
    newDate.value = newDate();
    newTitle.focus();
    return false;
  }
  
  
  
  
}
