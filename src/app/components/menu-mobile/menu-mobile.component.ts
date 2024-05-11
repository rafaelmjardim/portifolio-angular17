import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionCloseCircleOutline, ionCloseOutline, ionMenuOutline } from '@ng-icons/ionicons';
import { Header, MENU_LIST } from '../header/header';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [NgIcon, NgClass],
  providers: provideIcons({ionMenuOutline, ionCloseOutline}),
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {

  showMenu: boolean = false;

  menuList: Header[] = MENU_LIST;

  handleHideMenu = () => {    
    this.showMenu = !this.showMenu;
  }

}
