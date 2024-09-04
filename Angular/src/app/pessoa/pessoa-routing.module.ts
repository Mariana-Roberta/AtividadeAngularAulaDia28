import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizacaoComponent } from "./visualizacao/visualizacao.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { ListagemComponent } from "./listagem/listagem.component";

const routes: Routes = [

  { path: '', component: FormularioComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: 'id/:id', component: VisualizacaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
