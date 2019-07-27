import React from 'react';
import '../Nav/nav.component.css';
import {Link} from 'react-router-dom';
import db from '../../SERVICIOS/fireconfig';

function Nav (props){
    return(
    <div className="contendor-nav">
	    <div>
			  <nav>
				<div className="nav-wrapper">
				  <span className="logo">La Bodega</span>
				  <ul id="nav-mobile" className="right hide-on-med-Linknd-down">
					<li><Link to="/catalogo"><i className="material-icons afs">apps</i></Link></li>
					<li><Link to="/carrito"><i className="material-icons afs">add_shopping_cart</i></Link></li>
					<li><Link to="#"><i className="material-icons afs">inbox</i></Link></li>
					<li><Link to="#" onClick={()=>db.auth().signOut()}><i className="material-icons afs">exit_to_app</i></Link></li>
				  </ul>
				</div>
			  </nav>
		
	    </div>
    </div>
    )

}
export default Nav