import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from './header';
import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { ionRocketOutline, ionHomeOutline, ionBulbOutline, ionTerminalOutline, ionCallOutline, ionArrowDownOutline} from "@ng-icons/ionicons";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink, 
    NgOptimizedImage, 
    NgIcon,
    NgClass,
    NgStyle
  ],
  providers: [provideIcons({ionRocketOutline, ionHomeOutline, ionBulbOutline, ionTerminalOutline, ionCallOutline, ionArrowDownOutline})],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  headerItens: Header[] = [];
  
  scrolled: boolean = false;
  
  ngOnInit(): void {
    this.setMenuItens();
  }
  
  //Função que verifica scroll para aplicar stylo no header flutuante
  @HostListener('window:scroll', ['$event'])
  onScroll = (event: Event) => {
    this.scrolled = window.scrollY > 100;    
  }
  
  setMenuItens = () => {

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
