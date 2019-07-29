import React from 'react';
import '../item/item.componet.css';


class Item extends React.Component{
    constructor(props){
           super(props); 
    }
   render(){
        return(
            <div className="row rr">
                <div className="col l12 ff" >

                    <div className="card">
                        <div className="row">
                            <div className="col l5" >
                                <img class="responsive-img" src={this.props.img} height="100%"/>

                            </div>
                            <div className="col l6" >
                            <p><span>{this.props.nombre}</span><br/><span className="articulo-leyenda">Sub Total$: {parseFloat(this.props.precio)*this.props.cant} </span><br/> <span>Cantidad: {this.props.cant}</span></p>
                            
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>
        )
    }

}
export default Item