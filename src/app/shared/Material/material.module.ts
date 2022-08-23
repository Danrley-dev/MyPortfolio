import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  exports: [
    MatIconModule,
    MatGridListModule,
    MatDialogModule
  ],
})
export class MaterialModule {}