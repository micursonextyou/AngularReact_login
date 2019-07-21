
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'comp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {

 public contador:number=0;
  

  constructor() { }

  ngOnInit() {
          
  }
  pasar(e){
    this.contador+=e;
    
    

  }

}
