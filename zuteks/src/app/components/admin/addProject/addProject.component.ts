import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/userService.service';
import { Router } from '@angular/router';

import { RestApiService } from 'src/app/services/rest-api.service';

import { Project } from '../../project/Project.class';

@Component({
  selector: 'app-addProject',
  templateUrl: './addProject.component.html',
  styleUrls: ['./addProject.component.scss']
})
export class AddProjectComponent implements OnInit {

   project: Project = new Project();
    

  constructor(public userService: UserService, private router:Router, private restApi:RestApiService) { }

  ngOnInit(): void {
   
  }

  addNewProject(project: Project){
      this.restApi.addNewProject(project).subscribe(response => {
          console.log('Uspjesno ste dodali novi projeka!')   
      })
  }

  removeProject(project){
      this.project = new Project();
  }
}