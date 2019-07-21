import { ProductoInterface } from './../../Interfaces/producto';
import { Component, OnInit, Input } from '@angular/core';
import { EncarritoInterface } from 'src/app/Interfaces/encarrito';

@Component({
  selector: 'app-itemcarrito',
  templateUrl: './itemcarrito.component.html',
  styleUrls: ['./itemcarrito.component.css']
})
export class ItemcarritoComponent implements OnInit {
  @Input() articulo:EncarritoInterface;


  constructor() { }

  ngOnInit( ) {
    
  }

}
