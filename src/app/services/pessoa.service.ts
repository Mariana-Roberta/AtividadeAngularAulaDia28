import { Injectable } from '@angular/core';

export interface Pessoa {
  id: number;
  nome: string;
  idade: number;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private pessoas: Pessoa[] = [];

  constructor() {}

  getPessoas(): Pessoa[] {
    return [...this.pessoas];
  }

  getPessoaById(id: number) {
    return { ...this.pessoas.find(p => p.id === id)! };
  }

  addPessoa(pessoa: { id: number, nome: string, idade: number }) {
    this.pessoas.push(pessoa);
  }
  
}
