import { Component, OnInit } from '@angular/core';
import { Project } from './Project.class';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Project [] = [];
  selectedProject: Project;


  constructor(private restApi: RestApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.restApi.getAllProjects().subscribe((response: Project[]) => {
      this.projects = response;
      console.log(this.projects);
    });
   }

   showMore(project: Project) {
     this.selectedProject = project;
    
   }
 
}
