import { Component, OnInit, Input } from '@angular/core';
import { ComprasService } from 'src/app/Servicios/compras.service';
import { Route, Router } from '@angular/router';
import { AuthServiciosService } from 'src/app/Servicios/AuthServicios.service';


@Component({
  selector: 'nav-bar',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {
 
  public item="";
  @Input() contador='';

  constructor(private log:AuthServiciosService,private router:Router) { }
    

  ngOnInit() {
   }

   salir(){
     this.log.onLogOut();
     this.router.navigate(['']);
     console.log("dsadad");
   }


}
