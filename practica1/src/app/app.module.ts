

import { AngularFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule } from "@angular/router";
import {AppRoutingModule,routingComponents} from '../app/app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';






 /*     Componentes            */ 


import { AppComponent } from './Componentes/app/app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { NavComponent } from './Componentes/Nav/Nav.component';
import { CatalogoComponent } from './Componentes/catalogo/catalogo.component';

/*                     Enlase                                    */
import { environment}  from '../environments/environment';
import { PopupComponent } from './Componentes/popup/popup.component';
import { MaterialModule } from './material-modulo';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EncajaComponent } from './Componentes/encaja/encaja.component';
import { ArticuloComponent } from './Componentes/articulo/articulo.component';
import { ItemcarritoComponent } from './Componentes/itemcarrito/itemcarrito.component';
import { CarritocomprasComponent } from './Componentes/carritocompras/carritocompras.component';




@NgModule({
   declarations: [
      AppComponent,
      routingComponents,
      NavComponent,
      CatalogoComponent,
      FilterPipe,
      PopupComponent,
      EncajaComponent,
      ArticuloComponent,
      ItemcarritoComponent,
      CarritocomprasComponent
      
      
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule,
      ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireDatabaseModule,
      AppRoutingModule,
      FormsModule,
      MaterialModule,
      BrowserAnimationsModule

     
      
   ],
   providers: [
      AngularFireAuth,
      AngularFirestore
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [PopupComponent]

})
export class AppModule { }
