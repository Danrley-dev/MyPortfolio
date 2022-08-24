import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  exports: [
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule
  ],
})
export class MaterialModule {}