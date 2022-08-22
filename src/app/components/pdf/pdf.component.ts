import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';


pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
})
export class PdfComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
   
    public taskService: TaskService
  
  ) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  getTask() {
    return this.tasks;
  }

  //pdf de la lista de tareas
  downloadPdf() {
    const documentDefinition = {
      content: [
        { text: 'Lista de tareas', style: 'header' },
        this.getTask().map(task => {
          return [
            task.title,
            
          ];
          
        }),
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
        },
      },
    };
    // pdfMake.createPdf(documentDefinition).download('lista-de-tareas.pdf');
    const pdf = pdfMake.createPdf(documentDefinition);
    pdf.open();
  }
  
}
