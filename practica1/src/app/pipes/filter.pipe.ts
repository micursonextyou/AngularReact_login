import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg ==='' || arg.length < 4) return value;
     const result=[];
     for(const producto of value){
         if(producto.nombre.toLowerCase().indexOf(arg.toLowerCase())>-1){
           result.push(producto);
         }

     }
     return result;
  }

}
