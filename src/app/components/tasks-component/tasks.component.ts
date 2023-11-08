import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from '../../interfaces/task.interface';
import { TaskService } from 'src/app/services/tasks.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';





@Component({
  selector: 'app-tasks-component',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent {
  tareas: Task[] = [];
  nuevaTarea: string = '';
  tareaAEliminar?: number;
  tareaAEditar?: number;
  tarea: Task | undefined;
  id:number = 0;


  constructor( private taskService: TaskService, private router: Router, private toastr: ToastrService, private confirmationService: ConfirmationService) {
    this.tareas = taskService.getTasks();
  }

  eliminarTarea() {
    if(this.tareaAEliminar){
      this.taskService.removeTask(this.tareaAEliminar);
      this.tareas = this.taskService.getTasks();
      this.tareaAEliminar = 0;
    }
  }

  agregarTarea(){
    if (this.nuevaTarea.trim() !== ''){
      const nuevaTarea: Task = {
        id:  this.tareas.length + 1,
        nombre: this.nuevaTarea,
        completado: false
      };
    this.taskService.addTarea(nuevaTarea);
    }
    this.nuevaTarea = '';
    this.tareas = this.taskService.getTasks();
  }

  editarTarea(){
    if(this.tareaAEditar){
      this.taskService.completeTask(this.tareaAEditar);
      this.tareas = this.taskService.getTasks();
      this.tareaAEditar = 0;
    }
  }

  getTaskStyle(task: Task): any {
    return {
      'text-decoration': task.completado ? 'line-through' : 'none',
      'color': task.completado ? 'gray' : 'black'
    };
  }

  navigateToTaskDetail(task: Task) {
    if (!task.completado) {
      this.router.navigate(['/task-detail', task.id]);
    } else {
      this.toastr.warning('No puedes editar tareas completadas', 'Tarea Completada');
    }
  }

  deleteTask(task: Task) {
    // console.log('Eliminando tarea:', task);
    // this.confirmationService.confirm({
    //   message: '¿Estás seguro de que deseas eliminar esta tarea?',
    //   accept:()=>{
    //     console.log('Eliminando tarea:', task);
        this.taskService.removeTask(task.id);
        this.tareas = this.taskService.getTasks();
      }
    //})
  //}

  //extrea del arreglo la tarea cuyo ID se pasa por parámetro
  tareaById () {
    this.tarea = this.taskService.getTask(this.id);
  }


}


