import React from 'react';
import Articulo from '../articulo/articulo.componet.js';

export default class ListaArticulos extends React.Component{

    constructor(props){
        super(props);
        
    }
    render(){
        let filtroArticulos=this.props.data.filter(
            (producto)=>{return producto.data.nombre.toLowerCase().indexOf(this.props.clave.toLowerCase())!==-1;
        });

            return (
                <div className="row">
                    {  filtroArticulos.map((producto)=>{
                        return (
                              <Articulo  key={producto.id} nombre={producto.data.nombre} leyenda={producto.data.descripcion} imageUrl={producto.data.imageUrl} precio={producto.data.precio} cantidad={producto.data.cantidad}/>  
                               )
                    })}
                </div>
            )

    }

}