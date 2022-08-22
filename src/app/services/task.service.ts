import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[];
  constructor() { 
    this.tasks = [
    //   {title: 'write', description: 'write a book', hide: true},
    //   {title: 'creaye website', description: 'i have to create website', hide: true},
     ];
  }
  getTasks() {
    if(localStorage.getItem('tasks') === null) {
      return this.tasks;
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks') as string);
      return this.tasks;
    }
  }
  addTask(task: Task) {
    this.tasks.push(task);
    let tasks : Task[] = [];
    if(localStorage.getItem('tasks') === null) {
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks') as string);
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
      
  }

  deleteTask(task: Task) {
    for(let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i] == task) {
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }

  }
  cammbiarEstadoDeTarea(task: Task) {
    for(let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i] == task) {
        this.tasks[i].finished = !this.tasks[i].finished;
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }
  
  

  

  
  
  
  
  
}
