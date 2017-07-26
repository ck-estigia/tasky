import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { TaskComponent } from './task/task.component';
import { DataListModule } from "primeng/primeng";
import { MastersService } from '../shared/services/masters.service'

@NgModule({
  imports: [
    CommonModule, 
    DataListModule
  ],
  declarations: [ProjectsComponent, TaskComponent],
  providers: [MastersService]
})
export class MastersModule { }
