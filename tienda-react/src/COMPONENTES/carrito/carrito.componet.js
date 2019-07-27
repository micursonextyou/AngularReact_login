import React from 'react';
import '../carrito/carrito.componet.css';
import {Link} from 'react-router-dom';
import Nav  from '../Nav/nav.component.js';
import Item from '../item/item.componet.js';

export default class Carrito extends React.Component {

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
                                            <h4><span>Total $: aqui valor</span></h4>
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
