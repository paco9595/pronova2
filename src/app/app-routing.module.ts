import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ViewLoginComponent } from './views/login/login.component';
import { ProductosComponent } from './views/productos/productos.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: ViewLoginComponent},
  { path: 'productos', component: ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
