import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { MaterialModule } from '../../modules/material/material.module';
import { Articulo } from '../../interfaces/articulo.interface';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { ArticuloComponent } from '../articulo/articulo.component';

@Component({
  selector: 'app-lista-articulos',
  standalone: true,
  imports: [
    MaterialModule,
  ],
  templateUrl: './lista-articulos.component.html',
  styleUrl: './lista-articulos.component.css'
})
export class ListaArticulosComponent implements OnInit{

  articulos: Articulo[] = []

  constructor(
    private readonly articulosService: ArticulosService,
    public dialog: MatDialog
    ){
  }
  ngOnInit(): void {
    this.articulosService.getPosts().subscribe(articulos => {
      this.articulos = articulos
      console.log(articulos);
    })
  }

  openDialog(id:number) {
    this.articulosService.getPost(id).subscribe(articulo => {
      this.dialog.open(ArticuloComponent, {
        data: {
          ...articulo
        },
        disableClose: true
    });
    })
  }
}
