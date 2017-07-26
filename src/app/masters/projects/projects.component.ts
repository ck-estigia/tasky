import { Component, OnInit } from '@angular/core';

import {Project} from "../../shared/models/project"

import { MastersService } from '../../shared/services/masters.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  Service: MastersService;
  Projects:Array<Project>;

  constructor(service:MastersService) {
    this.Service = service;
   }

  ngOnInit() {
    this.Service.getPagedProjects(0,5).subscribe(projects => {
      this.Projects = projects.slice(0,5);     
    });
  }
  
  loadData(evt){
    this.Service.getPagedProjects(evt.firts, evt.rows).subscribe(projects => {
      this.Projects = projects.slice(evt.first, evt.first + evt.rows);     
    });
  }
}
