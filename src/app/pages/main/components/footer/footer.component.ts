import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SocialIcon } from './footer';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoInstagram, ionLogoLinkedin, ionLogoWhatsapp, ionMailOutline, ionLogoGithub } from '@ng-icons/ionicons';

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

  ngOnInit(): void {
    this.initSocialIcons();
  }

  initSocialIcons = () => {
    this.socialIconList = [
      {
        value: 'ionLogoInstagram',
        color: '#F38C21'
      },
      {
        value: 'ionLogoLinkedin',
        color: '#F38C21'
      },
      {
        value: 'ionLogoGithub',
        color: '#F38C21'
      },
      {
        value: 'ionMailOutline',
        color: '#F38C21'
      },
      {
        value: 'ionLogoWhatsapp',
        color: '#F38C21'
      },
    ]
  }
}
