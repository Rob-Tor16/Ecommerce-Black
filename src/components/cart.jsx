import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cartcontext'
import { Link } from 'react-router-dom'
import { CartItem } from "./cartitem"
import './cart.css'

export const Carrito = () => {
    

    const {cart, clearCart, total} = useContext(CartContext)

    if(cart.length === 0) {
        return(
            <div className="contenedor-sinItems">
                <h2>No hay items en el carrito</h2>
                <Link to ="/">Productos</Link>
            </div>
        )
    }

    
    
    return(
       
          <div className="contenedor-carrito">
                <div className="carrito">
                    <div className="titulo">
                        <h3 className="titulo-comprar">Carrito</h3>
                    </div>
                
                {
                    cart.map(producto => <CartItem key={producto.id} producto={producto}/>)
                }
                <div className="contenedor-resumen">
                    <h3 className="titulo">Resumen</h3>
                    <div className="acciones">
                        <div className="total">Total: ${total ()}</div>
                        <Link type="button" className="btn btn-outline-light" onClick={() => clearCart()}>Limpiar Carrito</Link>
                        <Link to="/checkout" className="btn btn-outline-light" >Comprar</Link>
                    </div>
                
               
                </div>
            
            </div>
          </div>
          
       
            
       
        
    )
}

export default Carrito