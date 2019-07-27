import React from 'react';
import '../carrito/carrito.componet.css';
import {Link} from 'react-router-dom';
import Nav  from '../Nav/nav.component.js';
import Item from '../item/item.componet.js';
import {CarritoConsumer} from '../../CONTEXT/carritoContect.js';


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
                                            <Item/>
                                            
                                        </div>
                                        
                                    </div>
                                    <div className="col l5 push-l1 total">
                                        <div className="row">
                                            <CarritoConsumer>
                                                {value=>{ return(
                                                <h4><span>Total $:  {value}  </span></h4>)
                                            }}
                                            </CarritoConsumer>   
                                        </div>
                                        <div className="row center">
                                            <button> Confirmar </button>
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