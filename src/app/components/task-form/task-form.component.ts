import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/interfaces/task.interface';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  tareas: Task[] = [];
  taskForm: FormGroup;

  constructor( private taskService: TaskService, private formBuilder: FormBuilder) {
    this.tareas = taskService.getTasks();
    this.taskForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]]})
  }


  onSubmit() {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id:  this.tareas.length + 1,
        nombre: this.taskForm.get('nombre')?.value,
        completado: false
      };
      // Agregar la nueva tarea a la lista de tareas (this.tareas)
      this.taskService.addTarea(newTask);
      // Limpia el formulario después de agregar la tarea
      this.taskForm.reset();
    }
  }
}
