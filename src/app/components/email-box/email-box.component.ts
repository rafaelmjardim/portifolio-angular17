import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionMailOutline } from "@ng-icons/ionicons";

@Component({
  selector: 'app-email-box',
  standalone: true,
  imports: [NgIconComponent, NgClass],
  providers: [provideIcons({ionMailOutline})],
  templateUrl: './email-box.component.html',
  styleUrl: './email-box.component.scss'
})
export class EmailBoxComponent {

  copyTxtEnable: boolean = false;
}
