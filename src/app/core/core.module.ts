import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/Material/material.module';
import { DialogComponent } from './dialog/dialog.component';
import { ContatosComponent } from './contatos/contatos.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HabilidadesComponent,
    ProjetosComponent,
    DialogComponent,
    ContatosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    HabilidadesComponent,
    ProjetosComponent,
    ContatosComponent
  ]
})
export class CoreModule { }
