import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Project} from '../../shared/models/Project';


@Injectable()
export class MastersService {  
  
  constructor(private _http:Http ) {
  }

  getProjects():Observable<Project[]>{
    return this._http.get("http://m.com:8000/TaskyService/Projects.json").map(res => {
      return res.json().map(item =>{
        return new Project(
            item.Status,
            item.DueDate,
            item.TitleColor,
            item.Project,
            item.Notes)
      })
    });
  }

  getPagedProjects (firts:number, rows:number ){

    return this._http.get("http://m.com:8000/TaskyService/Projects.json").map(res => {
      return res.json().map(item =>{
        return new Project(
            item.Status,
            item.DueDate,
            item.TitleColor,
            item.Project,
            item.Notes)
      })
    });    
  }

}
