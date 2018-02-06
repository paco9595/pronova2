import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { FiltroComponent } from './filtro/filtro.component';
import { CardProductosComponent } from './card-productos/card-productos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ProductosComponent,
    FiltroComponent,
    CardProductosComponent,

  ],
  exports: [
    ProductosComponent
  ]
})
export class ProductosModule { }
