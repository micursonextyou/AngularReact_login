import { CarritocomprasComponent } from './../Componentes/carritocompras/carritocompras.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../Componentes/app/app.component';
import { HomeComponent } from '../Componentes/home/home.component';
import { LoginComponent } from '../Componentes/login/login.component';
import { PopupComponent } from '../Componentes/popup/popup.component';




const routes: Routes = [
  //{ path: '', component: AppComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'carrito', component: CarritocomprasComponent }
  
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,HomeComponent,CarritocomprasComponent];


