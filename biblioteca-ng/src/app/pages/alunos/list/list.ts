import { Component } from '@angular/core';
import { AlunoResponse } from '../../../models/aluno.dto';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../../../services/aluno.service';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [TableModule, CommonModule, ButtonModule, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class AlunoList {
  alunos: AlunoResponse[] = [];

  constructor(private alunoService: AlunoService){ }

  ngOnInit() {
    this.carregarAlunos();
  }

  private carregarAlunos() {
    this.alunoService.getAll().subscribe({
       next: alunos => this.alunos = alunos,
        error: erro => {
          alert("n foi possivel");
          console.error("ocorreu erro: " + erro)
        }

      });
  }
  apagar(id: number) {
    this.alunoService.delete(id).subscribe({
      next: _ => this.carregarAlunos(),
      error: erro => {
        alert("n foi possivel")
        console.error("erro" + erro)

      }
    })
  }

}
