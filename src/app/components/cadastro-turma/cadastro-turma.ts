import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';


interface Turma {
  nome: string;
  sigla: string;

}

@Component({
  selector: 'app-cadastro-turma',
  imports: [RouterLink],
  templateUrl: './cadastro-turma.html',
  styleUrl: './cadastro-turma.scss'
})
export class CadastroTurma {

turmas: Turma[];
  nome: string = "";
  sigla: string = "";

 constructor(private router: Router){
  this.turmas = this.carregarTurmasLocalStorage()
  }
  salvar(): void {
  let turma: Turma = {
    nome: this.nome,
    sigla: this.sigla,
}
  this.turmas.push(turma)
  this.router.navigate(["./turmas"])
  this.salvarLocalStorage();
  }
  salvarLocalStorage(): void{
    let turmasString =JSON.stringify(this.turmas);

    localStorage.setItem("turmas", turmasString);
  }


    carregarTurmasLocalStorage(): Turma[] {
      let turmasDoLocalStorage = localStorage.getItem("alunos");
      if(turmasDoLocalStorage === null){
        return [];
      }
      let turmas: Turma[] = JSON.parse(turmasDoLocalStorage);
      return turmas;
    }
    }
  

  

