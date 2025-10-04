import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CategoriaEditarRequest } from '../../../models/categorias.dto';
import { CategoriaService } from '../../../services/categoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [FormsModule,ButtonModule, InputTextModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class CategoriaEditComponent {
  form: CategoriaEditarRequest;
  id: number;

  constructor(
  private categoriaService: CategoriaService,
    private activatedRoute: ActivatedRoute,
   
)
{
    this.form = {nome: ""}
     this.id =parseInt(this.activatedRoute.snapshot.paramMap.get("id")!.toString());
     this.carregarCategoria();
    }
  }

  editar(){

  }
}
