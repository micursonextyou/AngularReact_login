

import { Component, OnInit, NgModule } from '@angular/core';
import{DataproductosService} from '../../Servicios/dataproductos.service'
import { ComprasService } from 'src/app/Servicios/compras.service';




@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  public productos=[];  
  public producto="";
  public filterProducto="";
  public contador=0;
  public filtro="";
  

  constructor(private items:DataproductosService) { }

  ngOnInit() {
    this.items.getProductos().subscribe(productos=>{  
      this.productos=productos; 

           
    });
    console.log(this.filtro);
    
  }
  changed(event){
    this.filtro=event;
  }

  

}
