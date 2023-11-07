import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks-component/tasks.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { AppRoutingModule, routes} from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskService } from './services/tasks.service';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskFormComponent,
    TaskDetailComponent,
    EditTaskComponent,
  ],

  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    ConfirmDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],

  providers: [ConfirmationService, TaskService],
  bootstrap: [AppComponent],

})
export class AppModule { }
