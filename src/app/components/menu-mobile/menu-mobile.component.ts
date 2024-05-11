import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionMenuOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [NgIcon],
  providers: provideIcons({ionMenuOutline}),
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {

}
