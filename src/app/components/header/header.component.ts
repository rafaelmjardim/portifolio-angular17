import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from './header';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  headerItens: Header[] = [];

  ngOnInit(): void {
    this.headerItens = [
      {
        txt: 'Início',
        url: 'home'
      },
      {
        txt: 'Contato',
        url: 'Contato'
      },
      {
        txt: 'Sobre',
        url: 'sobre'
      }
    ];
  }
}
