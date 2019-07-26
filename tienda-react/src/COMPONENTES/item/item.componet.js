import React from 'react';
import '../item/item.componet.css';


function Item(){

return(
    <div className="row">
        <div className="col l12" >

            <div className="card">
                <div className="row">
                    <div className="col l5" >
                        <img class="responsive-img" src="https://cosasdigitales.com/wp-content/uploads/2017/06/test-online-gratuito-css-cosas-digitales-759x500.jpg" height="100%"/>

                    </div>
                    <div className="col l6" >
                    <p><span>Articulo </span><br/><span className="articulo-leyenda">Sub Total$: 22.00  </span><br/> <span>Cantidad: 10</span></p>
                    
                    </div>
                 </div>
            </div>


            
        </div>
    </div>
)


}
export default Item