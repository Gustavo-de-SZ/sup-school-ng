import { Component } from '@angular/core';
import { NavbarComponent, NavbarMenu } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-header',
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menus: NavbarMenu[];


    constructor() {
    this.menus = [
      {link: "calculadora", titulo: "Calculadora" },
      {link: "lista-pessoas", titulo: "Lista de pessoas" },
      {link: "alunos", titulo: "Alunos" },
    ]
  }
}
