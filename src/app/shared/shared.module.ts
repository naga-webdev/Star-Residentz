import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { CoreModule } from '../share/core/core.module';

@NgModule({
  imports: [
    MaterialModule,
    CoreModule
  ],
  exports: [
    MaterialModule,
    CoreModule
  ]
})
export class SharedModule { }
