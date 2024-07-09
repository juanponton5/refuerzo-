import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { Articulo } from '../../interfaces/articulo.interface';
import { MaterialModule } from '../../modules/material/material.module';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [
    MatDialogTitle, 
    MatDialogContent,
    MaterialModule,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Articulo,
    public dialogRef: MatDialogRef<ArticuloComponent>
  ) {}
  close():void{
    this.dialogRef.close();
  }
}
