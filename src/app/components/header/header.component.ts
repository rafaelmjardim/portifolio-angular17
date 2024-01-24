import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  headerItens: string[] = [];

  ngOnInit(): void {
    this.headerItens = [
      'Home',
      'Contato',
      'Sobre'
    ]
  }
}
