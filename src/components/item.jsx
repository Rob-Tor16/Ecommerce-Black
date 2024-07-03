import './item.css'
import React from 'react'
import { Link } from "react-router-dom";
 
const Item = ( {producto} ) => {
    return(
                <div className="producto" >
                    <img className="producto-imagen"src={producto.imagen} alt="" />
                    <div className="producto-detalles">
                        <h2 className="producto-titulo">{producto.nombre}</h2>
                        <div>${producto.precio}</div>
                        <div className="producto-agregar">
                            <Link className="agregar" to={`/item/${producto.id}`}>Ver Detalles</Link>
                        </div>   
                    </div>  
                </div>
    )
}

export default Item;