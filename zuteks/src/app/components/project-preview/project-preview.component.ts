import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project/Project.class';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss']
})
export class ProjectPreviewComponent implements OnInit {
  
 @Input() project: Project;
  constructor() { }

  ngOnInit(): void {
  }

}
