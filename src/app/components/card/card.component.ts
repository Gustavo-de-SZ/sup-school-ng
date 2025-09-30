import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  imagem?: string;
  nome?: string;
  numero?: number;
  tipoNome?: string;
  tipoCor?: string;
}
