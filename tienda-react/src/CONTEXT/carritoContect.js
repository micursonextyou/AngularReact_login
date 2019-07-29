import React,{Component} from 'react';
import { withRouter, Redirect } from "react-router";


const CarritoContext=React.createContext();

class CarritoProvider extends Component{
    
 
     state={
         productos:[],
         modalOpen: false,
         modalItem:''
        
     }
    handleDetails=()=>{
        console.log("detalles");
        
    }
    addToCarrito=(producto)=>{
                this.setState(state=>{                    state.productos.push({ ...producto, count: 1 });
                   
        });
         
    }
    Suma=()=>{
        let TOTAL=0;
        for(let i=0;i<this.state.productos.length;i++){
            TOTAL=TOTAL+(this.state.productos[i].precio*this.state.productos[i].cantidad);
        }
            return TOTAL
    }
    OpenPop=(productoPop)=>{
            this.setState(()=>{
                return {modelItem:productoPop,modalOpen:true}
            });
    }
    ClosePop=()=>{
       
            this.setState(()=>{
                return{ modalOpen:false}
            });
       
    }
    clearCarrito=()=>{
        this.setState(()=>{
            return {productos:[]}
        });
    }
    
  


    render(){
       
    return(
        <CarritoContext.Provider value={{
            ...this.state,
            handledetail:this.handleDetails,
            addToCard:this.addToCarrito,
            items: this.state.productos,
            Suma:this.Suma,
            Comprar:this.Comprar,
            ClosePop:this.ClosePop,
            OpenPop:this.OpenPop,
            clearCarrito:this.clearCarrito
        }}>
            {this.props.children}
            
        </CarritoContext.Provider>   
     )
    }
}

const CarritoConsumer=CarritoContext.Consumer;
export{CarritoProvider,CarritoConsumer}
