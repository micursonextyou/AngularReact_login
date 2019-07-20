import { ProductoInterface } from './../../Interfaces/producto';
import { Component, OnInit,Input,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  
  @Input() articulo:ProductoInterface;
  
    
    
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductoInterface) {}

  ngOnInit() { 
    console.log(this.data);
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  

}
