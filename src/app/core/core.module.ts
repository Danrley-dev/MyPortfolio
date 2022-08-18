import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HabilidadesComponent } from './habilidades/habilidades.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HabilidadesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    HabilidadesComponent
  ]
})
export class CoreModule { }
