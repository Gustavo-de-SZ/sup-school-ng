import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Turmas {
  nome: string;
  sigla: string;
  turmas: string;
}
@Component({
  selector: 'app-lista-turmas',
  imports: [FormsModule],
  templateUrl: './lista-turmas.html',
  styleUrl: './lista-turmas.scss'
})
export class ListaTurmas {
nome: string = ""
sigla: string = ""
turmas: Array<string> = [];

adicionar(): void{
  let turma = `${this.nome} ${this.sigla}`;
  this.turmas.push(turma);
  this.nome = "";
  this.sigla = "";
}
apagar(turmasParaApagar: string): void{
  let indiceParaApagar = this.turmas.indexOf(turmasParaApagar);
  this.turmas.splice(indiceParaApagar, 1);
}
}
