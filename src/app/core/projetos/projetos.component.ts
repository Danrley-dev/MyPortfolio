import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogProjetos} from 'src/app/models/projetos';
import { ProjetosService } from 'src/app/shared/services/projetos.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {
  projetoDestaque: DialogProjetos[] = [];
  todosProjetos: DialogProjetos[] = [];

  constructor(
    private dialog: MatDialog,
    private projetosServices: ProjetosService
  ) { }

  openDialog(obj: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '80% || 70%',
      height: '60% || 70%',
      panelClass: 'custom-modalbox',
      data: obj,
    });
    dialogRef.afterClosed().subscribe();
  }

  ngOnInit(): void {
    this.projetoDestaque = this.projetosServices.getProjetoDestaque()
    this.todosProjetos = this.projetosServices.getTodosProjetos();
  }

}
