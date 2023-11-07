import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { TaskService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})


export class EditTaskComponent {
  taskForm: FormGroup;
  tasks: Task[];

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {

    this.taskForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.tasks = taskService.getTasks();
  }

  updateTask() {
    if (this.taskForm.valid) {
      const tarea = this.tasks.find(tarea => tarea.nombre === this.taskForm.get('nombre')?.value);
      if (tarea)
        this.taskService.completeTask(tarea.id);
    }
    this.taskForm.reset();
  }
}
