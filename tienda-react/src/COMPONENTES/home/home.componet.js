import React from 'react';
import db from '../../SERVICIOS/fireconfig';
import '../home/home.componet.css';
import {Link} from 'react-router-dom';
import Nav  from '../Nav/nav.component.js';
import ListaArticulos from '../home/listaArticulos';

class Home extends React.Component{

    state={
        productos:[],
        search:''
       
    }
    componentDidMount(){
        db.collection("Productos").get().then((snapShots)=>{
            this.setState({
                productos:snapShots.docs.map(doc=>{
                    return {id:doc.id,data:doc.data()};
                    
                })
            })
        })
    }
    handleChange=event=> {
        this.setState({search: event.target.value});
      }
    

    render(){

        return(

            <div className="contenedor-catalogo">
                <div className="container">
                    <div>
                        <Nav />
                    </div>
                    <div className="row bodega">
                        <div className="col l12">
                            <div className="row buscador">
                                <div className="col l4">
                                    <h5>La bodega</h5>
                                </div>
                                <div className="col l4 push-l4 ">
                                    <span >¿Que estas buscando?</span>
                                    <input type="search" placeholder="Ingrese un articulo" value={this.state.search} onChange={this.handleChange}/>			
                                </div>
                            </div>		
                        </div>
                        <div className="row Catalogo center">
                            <div className="listaproductos">
                                <ListaArticulos data={this.state.productos} clave={this.state.search}/>                                
                            </div>  
                        </div>	
                    </div>
                </div>
            </div>
        )
    }


}
export default Home