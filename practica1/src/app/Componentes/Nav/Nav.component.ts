import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/Servicios/compras.service';


@Component({
  selector: 'nav-bar',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {
    
  public cuenta="";

  constructor(private carrito:ComprasService) { }

  ngOnInit() {
    this.cuenta=this.carrito.getTotalArticulos();
  }

}
