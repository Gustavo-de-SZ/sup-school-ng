import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlunoCadastroRequest, AlunoResponse } from '../models/aluno.dto';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
   url = "https://api.franciscosensaulas.com/api/v1/escola/alunos"

   constructor(private httpCLient: HttpClient) { }
   
getAll(): Observable<AlunoResponse[]> {
  return this.httpCLient.get<AlunoResponse[]>(this.url);
}

create(form: AlunoCadastroRequest): Observable<void> {
  return this.httpCLient.post<void>(this.url, form)
}

delete(id: number): Observable<void> {
  const urlApagar = `${this.url}/${id}`;
  return this.httpCLient.delete<void>(urlApagar);
}
}
