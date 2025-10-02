import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CategoriaResponse } from '../../../models/categorias.dto';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'categoria-list',
  imports: [ButtonModule, TableModule],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class CategoriaList {
categorias: CategoriaResponse[] = [];
constructor(){
  
}
ngOnInit(){

}
}
