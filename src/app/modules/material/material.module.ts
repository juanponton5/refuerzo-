import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ArticulosService } from '../../services/articulos.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
  ],
  exports:[
    CommonModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers:[ArticulosService]
})
export class MaterialModule { }
