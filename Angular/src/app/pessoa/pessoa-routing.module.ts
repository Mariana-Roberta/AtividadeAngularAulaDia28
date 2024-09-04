import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VisualizacaoComponent} from "./visualizacao/visualizacao.component";
import {FormularioComponent} from "./formulario/formulario.component";
import {ListagemComponent} from "./listagem/listagem.component";

const routes: Routes = [

  { path: 'visualizacao', component: VisualizacaoComponent },
  { path: 'visualizacao/:id', component: VisualizacaoComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'listaFormularios', component: ListagemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
