import { Component, OnInit } from '@angular/core';
import {Pessoa, PessoaService} from "../../services/pessoa.service";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";

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
  pessoas: Pessoa[] = [];

  constructor(
    private router: Router,
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    this.pessoas = this.pessoaService.getPessoas();
  }

  navegarParaAdicionar(): void {
    this.router.navigate(['/pessoa/formulario']);
  }

  visualizarPessoa(id: number): void {
    this.router.navigate(['/pessoa/visualizacao/', id]);
  }
}
