import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Project } from '../project/Project.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   projects: Project [] = [];
   selectedProject: Project;

  constructor(private restApi: RestApiService, private router:Router) { }

  ngOnInit(): void {
    this.getLastThreeProjects();
  }

  getLastThreeProjects() {
    this.restApi.getLastThreeProjects().subscribe((response: Project[]) => {
      this.projects = response;
      console.log(this.projects);
    });
   }

   showMore(project: Project) {
    this.selectedProject = project;
  }

  
}
