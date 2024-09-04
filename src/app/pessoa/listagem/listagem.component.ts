import { Component, OnInit } from '@angular/core';
import {FormularioService} from "../../services/formulario.service";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";
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

  formularios: any[] = [];
  error: string | null = null;

  constructor(private formularioService: FormularioService, private router: Router) {
  }

  ngOnInit(): void {
    this.formularioService.getFormularios().subscribe({
      next: (data) => this.formularios = data,
      error: (err) => this.error = 'Erro ao carregar os dados'
    });
  }

  navegarParaAdicionar(): void {
    this.router.navigate(['/pessoa/formulario']); // ajuste a rota conforme necessário
  }

  visualizarFormulario(id: number): void {
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
