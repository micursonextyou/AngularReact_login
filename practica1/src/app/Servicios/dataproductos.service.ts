
import { Injectable } from '@angular/core';
import {ProductoInterface} from '../Interfaces/producto';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataproductosService {

constructor(private AFS:AngularFirestore) { 
  this.productoCollection=AFS.collection<ProductoInterface>('Productos');
  this.productos=this.productoCollection.valueChanges();
  
}

private productoCollection:AngularFirestoreCollection<ProductoInterface>;
private productos: Observable<ProductoInterface[]>;  
private ItemDoc:AngularFirestoreDocument<ProductoInterface>;
private Item:Observable<ProductoInterface>;

getProductos(){
  return this.productos=this.productoCollection.snapshotChanges().pipe(map(changes=>{
    return changes.map(action =>{
      const data=action.payload.doc.data() as ProductoInterface;
      data.id=action.payload.doc.id;
      return data
       });
  }));
}
UpDateProductos(producto:ProductoInterface):void{
   let id=producto.id;
   this.ItemDoc=this.AFS.doc<ProductoInterface>(`Productos/${id}`);
   this.ItemDoc.update(producto);

  
}

}
