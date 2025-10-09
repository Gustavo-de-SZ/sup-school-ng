export interface CategoriaResponse{
    id: number;
    nome: string;
}

export interface CategoriaCadastroRequest{
    nome: string;
}


export interface CategoriaEditarRequest{
    nome: string;
}