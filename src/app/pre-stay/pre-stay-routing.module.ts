import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { ForgotPasswordComponent } from './login-register/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login-register/reset-password/reset-password.component';
import { ProfileComponent } from './login-register/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'authentication' },
  {
    path: 'authentication',
    component: LoginRegisterComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgotpassword', component: ForgotPasswordComponent },
      { path: 'resetpassword', component: ResetPasswordComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  },
  // { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreStayRoutingModule { }
