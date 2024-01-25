import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from './header';
import { text } from 'stream/consumers';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
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
        txt: 'Sobre',
        url: 'sobre'
      },
      {
        txt: 'Habilidades',
        url: 'habilidades'
      },
      {
        txt: 'Projetos',
        url: 'projetos'
      },
      {
        txt: 'Contato',
        url: 'Contato'
      },
    ];
  }
}
