import { Component, inject } from '@angular/core';
import { Project } from './projects';
import { MatDialog } from "@angular/material/dialog";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionArrowForwardOutline } from '@ng-icons/ionicons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({
      ionArrowForwardOutline
    })],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projectsList: Project[] = [
    {
      url_img: 'assets/projects/cardapio-online.png',
      name: 'Cardapio Online',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      link: 'https://cardapio-online-project.vercel.app/',
      technologies: 'Angular, Typescript, SASS e Firebase'
    },
    {
      url_img: 'assets/projects/travel.png',
      name: 'Travel Landingpage',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      link: 'https://travel-website-v17-project.vercel.app/',
      technologies: 'Angular com SSR, HTML e SASS'
    },
    {
      url_img: 'assets/projects/todo.png',
      name: 'Todo List',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      link: 'https://todo-list-portfolio-project.vercel.app/todo',
      technologies: 'Angular, Typescript, HTML, SASS'
    },
    
  ];

  private router = inject(Router);

  openProjectLink = (url: string) => {
    if (!url && !url.length) {
      return
    }
    
    window.open(url, '_blank')
  }

}
