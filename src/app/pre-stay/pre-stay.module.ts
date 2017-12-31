import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreStayRoutingModule } from './pre-stay-routing.module';
import { PreStayComponent } from './pre-stay.component';
import { LoginRegisterModule } from './login-register/login-register.module';
import { SearchModule } from './search/search.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PreStayRoutingModule,

    LoginRegisterModule,
    SearchModule
  ],
  declarations: [PreStayComponent]
})
export class PreStayModule { }
