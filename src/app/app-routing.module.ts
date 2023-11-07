import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TasksComponent } from "./components/tasks-component/tasks.component";
import { EditTaskComponent } from "./components/edit-task/edit-task.component";




export const routes: Routes = [
  { path: 'task', component: TasksComponent },  //lista de tareas
  { path: 'edit-task/:id', component: EditTaskComponent } //ruta para el form de edición
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // Asegúrate de exportar el módulo RouterModule
})

export class AppRoutingModule { }
