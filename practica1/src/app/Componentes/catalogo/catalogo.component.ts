

import { Component, OnInit, NgModule, Output,EventEmitter } from '@angular/core';
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
  public contador:number;
  public filtro="";
  @Output() sendContador= new EventEmitter(); 

  

  constructor(private items:DataproductosService) { }

  ngOnInit() {
    this.items.getProductos().subscribe(productos=>{  
      this.productos=productos; 

           
    });
    console.log(this.contador);
    
  }
  pasar(e){
    this.contador=e;
    this.sendContador.emit(this.contador);
    
  }

  

}
