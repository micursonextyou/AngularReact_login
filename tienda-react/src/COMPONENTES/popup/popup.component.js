import React from 'react';
import {CarritoConsumer} from '../../CONTEXT/carritoContect.js';
import './popup.component.css';

class Modal extends React.Component{
    render(){
            return(
                <CarritoConsumer>  
                     {value=>{
                         const {modalOpen,ClosePop}=value;
                         if(!modalOpen){
                             return null;
                         }else{ 

                         
                         return(
                
                        
                            <div className="popup" id="popup">
                                <div className="popup-inner">
                                <div className="popup__photo">
                                        <img src={value.modelItem.img} alt=""/>
                                    </div>
                                    <div className="popup__text">
                                        <h1>{value.modelItem.nombre}</h1>
                                        <p>{value.modelItem.descrip}</p>
                                    </div>                                 
                                        
                                            <a className="popup__close" onClick={()=>ClosePop()}>X</a>
        
                                </div>
                            </div>
                       
                    
                    )}}}

                </CarritoConsumer>


            )
    }
}
export default Modal;