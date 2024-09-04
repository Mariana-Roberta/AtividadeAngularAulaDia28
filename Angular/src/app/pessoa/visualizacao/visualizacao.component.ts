import { Component, OnInit } from '@angular/core';
import {FormularioService} from "../../services/formulario.service";
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
  formulario: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private formularioService: FormularioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.formulario = this.formularioService.getFormularioById(id);
    });
  }

  voltarParaLista(): void {
    this.router.navigate(['/formulario/listaFormularios']);
  }
}
