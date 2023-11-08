import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent  implements OnInit {
  taskId: number = 0;
  task?: Task;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.taskId = +params['id']; // Obtener el ID de la URL
      this.task = this.taskService.getTask(this.taskId); // Obtener la tarea correspondiente
    });
  }

  editarTarea() {
    if (this.task && this.task.id !== null && this.task.id !== undefined) {
      // Lógica para guardar la tarea, por ejemplo, puedes usar this.taskService para actualizar la tarea en el servicio.
      this.taskService.completeTask(this.task.id);
      // Redirigir a la lista de tareas o a donde desees después de guardar los cambios.
    } else {
      console.error('Error: ID de tarea no válido');
      // Puedes manejar el caso de un ID de tarea no válido de acuerdo a tus necesidades.
    }
  }
} {

}
