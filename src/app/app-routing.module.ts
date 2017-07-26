import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProjectsComponent} from "./masters/projects/projects.component";
import {TaskComponent} from  "./masters/task/task.component";

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
    children: []
  },
  {
    path: "task",
    component: TaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
