import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoAngular, ionLogoCss3, ionLogoFigma, ionLogoGithub, ionLogoHtml5, ionLogoJavascript, ionLogoNpm, ionLogoReact, ionLogoSass } from '@ng-icons/ionicons';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({
    ionLogoHtml5, 
    ionLogoCss3, 
    ionLogoJavascript, 
    ionLogoGithub, 
    ionLogoSass, 
    ionLogoReact, 
    ionLogoAngular,
    ionLogoFigma,    
  })],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  cardSkillsList: {name: string, icon: string}[] = [
    {
      name: 'HTML5', 
      icon: 'ionLogoHtml5',
    },
    {
      name: 'CSS', 
      icon: 'ionLogoCss3',
    },
    {
      name: 'JavaScript', 
      icon: 'ionLogoJavascript',
    },
    {
      name: 'Angular', 
      icon: 'ionLogoAngular',
    },
    {
      name: 'React', 
      icon: 'ionLogoReact',
    },
    {
      name: 'Sass', 
      icon: 'ionLogoSass',
    },
    {
      name: 'Gitub', 
      icon: 'ionLogoGithub',
    },
    {
      name: 'Figma', 
      icon: 'ionLogoFigma',
    },
   
  ]
}
