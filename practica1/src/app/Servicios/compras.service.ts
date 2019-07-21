import { Observable } from 'rxjs';
import { ProductoInterface } from './../Interfaces/producto';
import { Injectable } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { DataproductosService } from './dataproductos.service';


@Injectable({
  providedIn: 'root'
})
export class ComprasService {
 
 private cantarticulos=0;
 private ArticulosAdd=[]
 private filtrado=[];
 private total=0;

constructor(private serBD:DataproductosService) { }
   
    getNewAlert(){
        let alerta=this.ArticulosAdd.length;
        return Observable.create(observer=>{
              setTimeout(()=>{observer.next(alerta)},1000)
        });
    }



nuevoItem(item:ProductoInterface,unidades){ 
    this.cantarticulos+=unidades;
    
    
    item.cantidad-=unidades;
    let precio=item.precio*unidades;
     this.ArticulosAdd.push({item,unidades,precio});
   
     
    
    
     
}
getArticulos(){
  return this.ArticulosAdd;
}



comprar(){
  for(let oneItem of this.ArticulosAdd){
     this.serBD.UpDateProductos(oneItem.item);
  }
    this.ArticulosAdd=[];
  

}


}
