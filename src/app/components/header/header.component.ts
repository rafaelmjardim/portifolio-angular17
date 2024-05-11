import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header, MENU_LIST } from './header';
import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { ionRocketOutline, ionHomeOutline, ionBulbOutline, ionTerminalOutline, ionCallOutline, ionArrowDownOutline, ionPersonOutline, ionExtensionPuzzleOutline, ionCodeWorking, ionCodeWorkingOutline, ionPhonePortraitOutline} from "@ng-icons/ionicons";
import { MenuMobileComponent } from '../menu-mobile/menu-mobile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink, 
    NgOptimizedImage, 
    NgIcon,
    NgClass,
    NgStyle,
    MenuMobileComponent
  ],
  providers: [
    provideIcons({
      ionRocketOutline, 
      ionHomeOutline, 
      ionBulbOutline, 
      ionTerminalOutline, 
      ionCallOutline, 
      ionArrowDownOutline,
      ionPersonOutline,
      ionExtensionPuzzleOutline,
      ionCodeWorkingOutline,
      ionPhonePortraitOutline
    })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  headerItens: Header[] = MENU_LIST;
  
  scrolled: boolean = false;
  
  ngOnInit(): void {

  }
  
  //Função que verifica scroll para aplicar stylo no header flutuante
  @HostListener('window:scroll', ['$event']) //adicionar [ngClass]="{'scrolled': scrolled}" na div principal para ativar
  onScroll = (event: Event) => {
    this.scrolled = window.scrollY > 100;    
  }
  
  
}
