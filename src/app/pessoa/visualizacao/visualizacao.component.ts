import { Component, OnInit } from '@angular/core';
import {Pessoa, PessoaService} from "../../services/pessoa.service";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";

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
  pessoa: Pessoa | undefined;

  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.pessoa = this.pessoaService.getPessoaById(id);
    });
  }

  voltarParaLista(): void {
    this.router.navigate(['/pessoa/listagem']);
  }
}
