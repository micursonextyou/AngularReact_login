import React from 'react';
import '../articulo/articulo.componet.css';
import {Link} from 'react-router-dom';



    function Articulo(props){


        return(
            
                <div className="col l3">
                    <div className="card">
                            <div className="card-image">
                                <img src={props.imageUrl} width="50%" height="150px"/>
                                <span className="card-title">{props.nombre}</span>
                            </div>
                            <div className="card-content">
                                
                                
                            <p><span className="articulo-leyenda">precio $: {props.precio}  </span><br/> <span>Cantidad:  {props.cantidad}</span></p>
                                
                            </div>
                            <div className="card-action">
                            <div className="row ">
                                <div className="col l2 ">                            
                                    <a className="btn-floating light-blue darken-3
   waves-effect waves-light red"><i className="material-icons">book</i></a>
                                </div>
                                <div className="col l2 push-l1 ">   
                                    <a className="btn-floating yellow darken-1  waves-effect waves-light red"><i className="material-icons">add</i></a>
                                </div>
                                <div className="col l5 push-l3">
                                    <input className="yyy" type ="number" min="0" max={props.cantidad} />
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
           
        
        
        )
    


}
export default Articulo