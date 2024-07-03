import React, { useContext } from 'react';
import ItemCount from './itemcount';
import "./itemdetail.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartcontext";

 const ItemDetail = ({id, nombre, imagen, categoria, precio }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio, imagen
        }

        addItem(item, quantity)
    }

  return (
                <div className="contenedor-detalle">
                    <div className="contenedor-imagen">
                        <img className="detalle-imagen"src={imagen} alt={nombre}/>
                    </div>
                    
                    <div className="producto-detalles">
                        <h2 className="detalle-titulo">{nombre}</h2>
                        <div>{categoria}</div>
                        <p>
                            <span>
                                ${precio}
                            </span>
                        </p>
                        <div className="contenedor-contador">
                            {
                                quantityAdded > 0 ? (
                                    <Link to="/cart" className="agregar">Terminar Compra</Link>
                                ):(
                                    <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
                                )
                            }
                            
                        </div>  
                    </div>  
                </div>
    
  )
}

export default ItemDetail;