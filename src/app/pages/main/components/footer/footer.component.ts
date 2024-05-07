import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SocialIcon } from './footer';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoInstagram, ionLogoLinkedin, ionLogoWhatsapp, ionMailOutline, ionLogoGithub } from '@ng-icons/ionicons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIcon
  ],
  providers: provideIcons({ionLogoInstagram, ionLogoLinkedin, ionLogoGithub, ionMailOutline, ionLogoWhatsapp}),
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  socialIconList: SocialIcon[] = [];

  constructor (private router: Router) {}

  ngOnInit(): void {
    this.initSocialIcons();
  }

  initSocialIcons = () => {
    this.socialIconList = [
      {
        value: 'ionLogoInstagram',
        color: '#F38C21',
        url: 'https://www.instagram.com/rafaelmjardim'
      },
      {
        value: 'ionLogoLinkedin',
        color: '#F38C21',
        url: 'https://www.linkedin.com/in/rafaelmjardim'
      },
      {
        value: 'ionLogoGithub',
        color: '#F38C21',
        url: 'https://github.com/rafaelmjardim'
      },
      {
        value: 'ionMailOutline',
        color: '#F38C21',
        url: 'mailto:rafaelmjardim@gmail.com'
      },
      {
        value: 'ionLogoWhatsapp',
        color: '#F38C21',
        url: 'https://api.whatsapp.com/send?phone=5551998747124&text=Ol%C3%A1%2C%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20meu%20web%20site!'
      },
    ]
  }
}