import { Component } from '@angular/core';
import { Project } from './projects';
import { MatDialog } from "@angular/material/dialog";
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectsList: Project[] = [
    {
      url_img: 'assets/background-img.jpg',
      name: 'Nome do projeto',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      link: '',
      technologies: 'HTML, CSS'
    },
    {
      url_img: 'assets/background-img.jpg',
      name: 'Nome do projeto',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      link: '',
      technologies: 'HTML, CSS'
    },
    {
      url_img: 'assets/background-img.jpg',
      name: 'Nome do projeto',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      link: '',
      technologies: 'HTML, CSS'
    },
    
  ];

  constructor (private dialog: MatDialog){}

  handleOpenDialog = (project: Project) => {
    // this.dialog.open(ProjectDialogComponent);
    return
  }

}
