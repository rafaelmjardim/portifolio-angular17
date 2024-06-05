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
      imgUrl: 'assets/projects/mr3.png',
      name: 'Em desenvolvimento...'
    },
    {
      imgUrl: 'assets/projects/travel2.png',
      name: 'Em desenvolvimento...'
    },
    {
      imgUrl: 'assets/projects/cafe.png',
      name: 'Em desenvolvimento...'
    },
    {
      imgUrl: 'assets/projects/payments.png',
      name: 'Em desenvolvimento...'
    },
    {
      imgUrl: 'assets/projects/travel.png',
      name: 'Em desenvolvimento...'
    },
    {
      imgUrl: 'assets/projects/login.png',
      name: 'Em desenvolvimento...'
    },
    // {
    //   imgUrl: '',
    //   name: 'Projeto 3'
    // },
    // {
    //   imgUrl: '',
    //   name: 'Projeto 4'
    // },
    // {
    //   imgUrl: '',
    //   name: 'Projeto 5'
    // },
    // {
    //   imgUrl: '',
    //   name: 'Projeto 6'
    // },
  ];

  constructor (private dialog: MatDialog){}

  handleOpenDialog = (project: Project) => {
    this.dialog.open(ProjectDialogComponent);
  }

}
