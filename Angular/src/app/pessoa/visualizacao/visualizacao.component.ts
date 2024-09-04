import { Component, OnInit } from '@angular/core';
import { PessoaService } from "../../services/pessoa.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-visualizacao',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './visualizacao.component.html',
  styleUrl: './visualizacao.component.css'
})
export class VisualizacaoComponent implements OnInit {

  pessoa: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (!isNaN(id)) {
        this.pessoaService.getPessoaById(id).subscribe(
          pessoa => {
            this.pessoa = pessoa; // Atribui a resposta ao objeto pessoa
          },
          error => {
            console.error('Erro ao buscar pessoa:', error); // Lida com o erro
          }
        );
      } else {
        console.error('ID inválido:', id);
      }
    });
  }

  voltarParaLista(): void {
    this.router.navigate(['/pessoa/listagem']);
  }
}
