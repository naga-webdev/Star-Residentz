import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pre-stay' },
  { path: 'pre-stay', loadChildren: './pre-stay/pre-stay.module#PreStayModule' },
  { path: 'check-in', loadChildren: './check-in/check-in.module#CheckInModule' },
  { path: 'post-stay', loadChildren: './post-stay/post-stay.module#PostStayModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
