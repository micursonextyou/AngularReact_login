import React from 'react';
import '../articulo/articulo.componet.css';
import {Link} from 'react-router-dom';
import { log } from 'util';



    class Articulo extends React.Component{
         constructor(props){
             super(props);
         
             this.product={
                 nombre:props.nombre,
                 img:props.imageUrl,
                 precio:props.precio,
                 stock:props.cantidad,
                 cantidad:''

             }
         }
         hanbleimp=e=>{
                
                
         }
         handleChange=e=>{           
           this.product.cantidad=e.target.value ;
         
        
            }
         
        render(){
        return(
            
                <div className="col l3">
                    <div className="card">
                            <div className="card-image">
                                <img src={this.product.img} width="50%" height="150px"/>
                                <span className="card-title">{this.product.nombre}</span>
                            </div>
                            <div className="card-content">
                                
                                
                            <p><span className="articulo-leyenda">precio $: {this.product.precio}  </span><br/> <span>Cantidad:  {this.product.stock}</span></p>
                                
                            </div>
                            <div className="card-action">
                            <div className="row ">
                                <div className="col l2 ">                            
                                    <a className="btn-floating light-blue darken-3  waves-effect waves-light red"><i className="material-icons">book</i></a>
                                </div>
                                <div className="col l2 push-l1 ">   
                                    <a className="btn-floating yellow darken-1  waves-effect waves-light red" onClick={(e)=>this.props.Agrecarcompra(e,this.product)} ><i className="material-icons">add</i></a>
                                </div>
                                <div className="col l5 push-l3">
                                    <input className="yyy" type ="number" name="cantidad" min="1" max={this.product.stock}   onChange={this.handleChange}   />
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
           
        
        
        )
        }
    


}
export default Articulo