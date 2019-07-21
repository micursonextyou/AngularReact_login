import { ProductoInterface } from './../../Interfaces/producto';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComprasService } from 'src/app/Servicios/compras.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PopupComponent} from '../popup/popup.component';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  @Input() producto:ProductoInterface;
  public contador=0;
  private info:string;
  public iteminfo='';
  public lansar=false;
  @Output()addnumero =new EventEmitter();




  constructor(private compras:ComprasService,public dialog: MatDialog) { }

  ngOnInit() {
  }

  addProducto(item){
    if(this.contador>0){
        this.compras.nuevoItem(item,this.contador);
        this.addnumero.emit(this.contador);
    }
    
  }
  Informacion(item){
    
    this.iteminfo=item;
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '700px',height:'400px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('algo');
      
    });
     
      
  }





}
