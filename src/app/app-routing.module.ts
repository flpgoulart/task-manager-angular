import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';

const ROUTES = RouterModule.forRoot([
    //para cada requisição do dominio.com/***  ele gera uma nova rota. 
    { path: 'tasks/:id', component: TaskDetailComponent },
    { path: 'dashboard', component: DashboardComponent  },
    { path: 'tasks',     component: TasksComponent      },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  ])

  @NgModule({
    imports: [ROUTES],
    exports: [RouterModule]
  })

export class AppRoutingModule{ }