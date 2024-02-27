import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from './header';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { ionRocketOutline, ionHomeOutline, ionBulbOutline, ionTerminalOutline, ionCallOutline, ionArrowDownOutline} from "@ng-icons/ionicons";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink, 
    NgOptimizedImage, 
    NgIcon,
    NgClass    
  ],
  providers: [provideIcons({ionRocketOutline, ionHomeOutline, ionBulbOutline, ionTerminalOutline, ionCallOutline, ionArrowDownOutline})],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  headerItens: Header[] = [];
  iconTeste: IconType = ionHomeOutline

  ngOnInit(): void {
    this.headerItens = [
      {
        txt: 'Início',
        url: 'home',
      },
      {
        txt: 'Sobre',
        url: 'sobre',
      },
      {
        txt: 'Habilidades',
        url: 'habilidades',
      },
      {
        txt: 'Projetos',
        url: 'projetos',
      },
      {
        txt: 'Contato',
        url: 'Contato',
      },
      {
        txt: 'Currículo',
        url: 'curriculo',
        pdf: 'assets/curriculo_rafael_jardim.pdf',
        icon: 'ionArrowDownOutline',
        isButton: true
      }
    ];
  }
}
