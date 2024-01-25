import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionMailOutline } from "@ng-icons/ionicons";

@Component({
  selector: 'app-email-box',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ionMailOutline})],
  templateUrl: './email-box.component.html',
  styleUrl: './email-box.component.scss'
})
export class EmailBoxComponent {

}
