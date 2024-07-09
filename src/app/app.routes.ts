import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { combineLatest } from 'rxjs';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';

export const routes: Routes = [
    {
    path:'',
    component: ListaArticulosComponent
    }
];
