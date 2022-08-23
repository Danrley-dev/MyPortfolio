import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialogCreate() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '80%',
      height: '500px',
      panelClass: 'custom-modalbox'
    });
    dialogRef.afterClosed().subscribe();
  }

  ngOnInit(): void {
  }

}
