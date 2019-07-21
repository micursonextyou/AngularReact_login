import { EncarritoInterface } from './../../Interfaces/encarrito';
import { Component, OnInit, Input } from '@angular/core';
import { ComprasService } from 'src/app/Servicios/compras.service';
import { functions } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.component.html',
  styleUrls: ['./carritocompras.component.css']
})
export class CarritocomprasComponent implements OnInit {
  public Items=[];
  public articulo:EncarritoInterface;

  
  public ValorTotal=0;

  constructor(private sercomp:ComprasService, private router:Router) { }

  ngOnInit() {
    this.Items=this.sercomp.getArticulos();
    this.total();
  
  }
  total(){
        for(this.articulo of this.Items){
          this.ValorTotal+=this.articulo.precio;
        }       
  }

  confirm(){
      this.router.navigate(['home']);
      this.sercomp.comprar();
  }

}
