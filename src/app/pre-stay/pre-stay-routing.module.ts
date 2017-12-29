import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'authentication' },
  { path: 'authentication', loadChildren: './login-register/login-register.module#LoginRegisterModule' },
  { path: 'search', loadChildren: './search/search.module#SearchModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreStayRoutingModule { }
