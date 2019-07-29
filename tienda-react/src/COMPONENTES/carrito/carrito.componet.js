import React from 'react';
import '../carrito/carrito.componet.css';
import {Link} from 'react-router-dom';
import Nav  from '../Nav/nav.component.js';
import Item from '../item/item.componet.js';
import {CarritoConsumer} from '../../CONTEXT/carritoContect.js';
import { log } from 'util';


class Carrito extends React.Component {

    render(){
        
        return(

                <div className="contenedor">
                    <div className="container">
                        <div>
                            <Nav/>
                        </div>
                        <div className="row bodega">
                            <div className="col l12">
                                <div className="row">
                                    <div className="col l5 lista">
                                        <h4>Lista de articulos:</h4>
                                        <div className="listaItemCarrito">
                                        <CarritoConsumer>
                                        {value=>value.items.map((producto)=>{
                                            console.log(producto);
                                            return(
                                                <Item key={producto.id} nombre={producto.nombre} img={producto.img} precio={producto.precio} cant={producto.cantidad}/>
                                            )
                                        })}
                                           
                                          
                                           </CarritoConsumer>   
                                        </div>
                                        
                                    </div>
                                    <div className="col l5 push-l1 total">
                                        <div className="row">
                                            <CarritoConsumer>
                                                {value=>{ return(
                                                <h4><span>Total $: {value.Suma()}   </span></h4>)
                                            }}
                                            </CarritoConsumer>   
                                        </div>
                                        <div className="row center">
                                            <CarritoConsumer>
                                                {value=>{return( 
                                                   <div className="button"> <Link to="/catalogo"  onClick={()=>{value.clearCarrito()}} > Confirmar </Link></div>
                                                )}}   
                                            </CarritoConsumer>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
        )
    }


}
export default Carrito