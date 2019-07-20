import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthServiciosService {
  
constructor(public afsAuth:AngularFireAuth) { }
onLoginFireBase(email:string,password:string){
  return new Promise((resolve,reject)=>{ 
     this.afsAuth.auth.signInWithEmailAndPassword(email,password)
     .then(userData => resolve(userData),
     error=>reject(error));
  });
    
  
}
onLogOut(){
  this.afsAuth.auth.signOut();
}

isAuth(){
  return this.afsAuth.authState.pipe(map(auth=>auth));

}



}
