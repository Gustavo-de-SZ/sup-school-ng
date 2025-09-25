import { Component } from '@angular/core';

  interface Material{
    nome: string;
  }
@Component({
  selector: 'app-cadastro-materias',
  imports: [],
  templateUrl: './cadastro-materias.html',
  styleUrl: './cadastro-materias.scss'

})
export class CadastroMaterias {

  materias: Material[];

  nome: string = "";


  constructor(private router: Router){
    this.materias = this.carregarMateriasLocalStorage();
  }
}
