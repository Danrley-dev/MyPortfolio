import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogProjetos} from 'src/app/models/projetos';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  
  projeto!: DialogProjetos;
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogProjetos) {
    this.projeto = data
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  ngOnInit(): void {
   
  }

}
