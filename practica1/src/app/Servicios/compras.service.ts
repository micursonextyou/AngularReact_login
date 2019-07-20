import { ProductoInterface } from './../Interfaces/producto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
 private cantidad="";
constructor() { }


getTotalArticulos(){
  
  return this.cantidad ;
  
}

nuevoItem(item:ProductoInterface,Newitem){
 
  this.cantidad=Newitem;
  
  
  

}


}
