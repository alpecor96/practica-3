import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';


@Injectable({
  providedIn: 'root'
})


export class TaskService {

  public arregloTareas: Task[] = [
    {id: 1, nombre: 'Limpieza', completado: true},
    {id: 2, nombre: 'Recoger', completado: false},
    {id: 3, nombre: 'Cenar', completado: false},
  ]


  //devuelve una tarea del arreglo de tareas
  getTask(id: number): Task | undefined {
    const tarea: Task | undefined = this.arregloTareas.find(task => task.id === id);
    return tarea;
  }

  //Devuelve las tareas del arreglo
  getTasks() {
    return this.arregloTareas ;
  }

  //Elimina la tarea cuyo ID se pasa por parámetro
  removeTask(id:number): void {
    this.arregloTareas = this.arregloTareas.filter(task => task.id !== id);
    //console.log(this.tareas)
  }

  //Se agrega una tarea nueva al arreglo
  addTarea(nuevaTarea:Task) {
    this.arregloTareas.push(nuevaTarea);
  }

  //Edita una tarea y la pone como completada
  completeTask(id: number):void {
    const tarea = this.arregloTareas.find(tareas => tareas.id === id);
    if (tarea)
        tarea.completado = true;
  }

}



