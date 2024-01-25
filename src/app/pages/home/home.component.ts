import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { EmailBoxComponent } from '../../components/email-box/email-box.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, EmailBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
