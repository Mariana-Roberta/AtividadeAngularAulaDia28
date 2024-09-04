import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: 'pessoa', loadChildren: () => import('./pessoa/pessoa.module').then(m => m.PessoaModule) },
  { path: '', redirectTo: 'pessoa/listagem', pathMatch: 'full' }

];
