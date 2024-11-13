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
      url_img: 'assets/projects/cardapio-online.png',
      name: 'Cardapio Online',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      link: '',
      technologies: 'Angular, Typescript, SASS e Firebase'
    },
    {
      url_img: 'assets/projects/travel.png',
      name: 'Travel Landingpage',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      link: '',
      technologies: 'Angular com SSR, HTML e SASS'
    },
    {
      url_img: 'assets/projects/todo.png',
      name: 'Todo List',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      link: '',
      technologies: 'Angular, Typescript, HTML, SASS'
    },
    
  ];

  constructor (private dialog: MatDialog){}

  handleOpenDialog = (project: Project) => {
    // this.dialog.open(ProjectDialogComponent);
    return
  }

}
