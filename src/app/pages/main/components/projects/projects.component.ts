import { Component } from '@angular/core';
import { Project } from './projects';

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
      imgUrl: 'assets/projects/travel2.png',
      name: 'Em desenvolvimento...'
    },
    {
      imgUrl: 'assets/projects/login.png',
      name: 'Em desenvolvimento...'
    },
    {
      imgUrl: 'assets/projects/travel2.png',
      name: 'Em desenvolvimento...'
    },
    {
      imgUrl: 'assets/projects/login.png',
      name: 'Em desenvolvimento...'
    },
    {
      imgUrl: 'assets/projects/travel2.png',
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


}
