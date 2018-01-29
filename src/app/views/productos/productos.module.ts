import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { FiltroComponent } from './filtro/filtro.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ProductosComponent,
    FiltroComponent

  ],
  exports: [
    ProductosComponent
  ]
})
export class ProductosModule { }
