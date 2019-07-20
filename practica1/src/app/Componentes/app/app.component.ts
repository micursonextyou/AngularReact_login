import { Component , OnInit } from '@angular/core';
import { AuthServiciosService } from '../../Servicios/AuthServicios.service';
import {AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLogged:boolean=false;
  title = 'practica1';

  constructor(private authService:AuthServiciosService,private afsAuth:AngularFireAuth ){}
  ngOnInit(){
    this.getCurrentUser(); 
  }

  getCurrentUser(){
    this.authService.isAuth().subscribe(auth => {
      if(auth){
        if(!this.isLogged){
          this.isLogged=true;
          console.log("login dasda "+this.isLogged );
        }      
      }else{
        this.isLogged=false;
        console.log("logout");
        
      }
    });
    

  }





}
