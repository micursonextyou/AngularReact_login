import React,{Component} from 'react';

const CarritoContext=React.createContext();

class CarritoProvider extends Component{

     state={
         productos:[]
     }
    handleDetails=()=>{
        console.log("detalles");
        
    }
    addToCarrito=(producto)=>{

        this.setState(state=>{
                    state.productos.push({ ...producto, count: 1 })
        });
        console.log(this.state.productos);
        
        
    }
    render(){
    return(
        <CarritoContext.Provider value={{
            ...this.setState,
            handledetail:this.handleDetails,
            addToCard:this.addToCarrito
        }}>
            {this.props.children}
        </CarritoContext.Provider>   
     )
    }
}

const CarritoConsumer=CarritoContext.Consumer;
export{CarritoProvider,CarritoConsumer}
