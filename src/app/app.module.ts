import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';


import { TaskService } from './services/task.service';

import { PdfComponent } from './components/pdf/pdf.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TaskFormComponent,
    TaskComponent,
    TaskListComponent,
    PdfComponent,

    
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
