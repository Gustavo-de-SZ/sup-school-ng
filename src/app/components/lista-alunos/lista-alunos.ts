import { Component } from '@angular/core';
interface Aluno {
  id: string;
   nome: string;
  nota1?: number;
  nota2?: number;
  nota3?: number;
  frequencia?: number;
  media :number;
  status: string;
}

@Component({
  selector: 'app-lista-alunos',
  imports: [],
  templateUrl: './lista-alunos.html',
  styleUrl: './lista-alunos.scss'
})
export class ListaAlunos {
 alunos: Aluno[];
constructor(){
    this.alunos = this.carregarAlunosLocalStorage();
  }
   carregarAlunosLocalStorage(): Aluno[] {
  let alunosDoLocalStorage = localStorage.getItem("alunos");
  if(alunosDoLocalStorage === null){
    return [];
  }
  let alunos: Aluno[] = JSON.parse(alunosDoLocalStorage);
  return alunos;
  }
}
