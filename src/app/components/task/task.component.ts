import { Component, OnInit , Input} from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  


  @Input()
  task!: Task;
  constructor(
    public taskService: TaskService,
  ) { }
  


  ngOnInit(): void {
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
  }
  cambiarEstadoDeTarea(task: Task) {
    this.taskService.cammbiarEstadoDeTarea(task);
  }
  
  // UpdateTask(editTitle: any, editDescription: any) {
  //   this.taskService.UpdateTask({
  //     title: editTitle.value, description: editDescription.value, hide: true,
  //     finished: false,
  //     edit: true
  //   });
  //   console.log(editTitle.value);
  // } 
  
  
  

  
   
 
    
    
   


  }

 
  
  
  

