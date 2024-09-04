import { Component, OnInit } from '@angular/core';
import { PessoaService } from "../../services/pessoa.service";
import { Router } from "@angular/router";
import { NgForOf } from "@angular/common";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit {

  pessoas: any[] = [];
  error: string | null = null;

  constructor(private pessoaService: PessoaService, private router: Router) {
  }

  ngOnInit(): void {
    this.pessoaService.getPessoas().subscribe({
      next: (data) => this.pessoas = data,
      error: (err) => this.error = 'Erro ao carregar os dados'
    });
  }

  navegarParaAdicionar(): void {
    this.router.navigate(['/pessoa/formulario']); // ajuste a rota conforme necessário
  }

  visualizarPessoa(id: number): void {
    this.router.navigate(['/pessoa/id', id]); // ajuste a rota conforme necessário
  }

  /*pessoas: Pessoa[] = [];

  constructor(
    private router: Router,
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    this.pessoas = this.pessoaService.getPessoas();
  }

  navegarParaAdicionar(): void {
    this.router.navigate(['/formulario']);
  }

  visualizarPessoa(id: number): void {
    this.router.navigate(['/pessoa/visualizacao/', id]);
  }*/
}
