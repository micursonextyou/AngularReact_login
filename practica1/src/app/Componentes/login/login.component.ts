import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthServiciosService } from '../../Servicios/AuthServicios.service';





@Component({
  selector: 'log',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
     
    createFormGropu(){
      return new FormGroup({
        email: new FormControl('',[Validators.required,Validators.email,Validators.minLength(12)]),
        password: new FormControl('',[Validators.required,Validators.minLength(3)])
      });     
   }
   loginform: FormGroup;
 
  constructor(public afsAuth:AngularFireAuth,private router:Router,private authServivios:AuthServiciosService ) {
    this.loginform=this.createFormGropu();
   }

  ngOnInit() {
  }

  onResetFrom(){
    this.loginform.reset(); 
    
  }
  
  onLogin():void{
   console.log(this.loginform.value.email,this.loginform.value.password);
   
    this.authServivios.onLoginFireBase(this.loginform.value.email,this.loginform.value.password)
    .then((res)=>{
      this.router.navigate(['home']);
    }).catch(err=>console.log(err));

  }

}
