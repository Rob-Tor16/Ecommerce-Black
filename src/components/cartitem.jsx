import './cartitem.css'
import { CartContext } from '../context/cartcontext'
import { useContext } from 'react'

export const CartItem = ({producto}) => {

  const {deleteItem} = useContext(CartContext)

  return (
    
        <div className="carrito-items">
          <div className="carrito-item">  
              <div className="carrito-lista">
                <img className="item-imagen" width="80px"src={producto.imagen} alt={producto.nombre} />
                <p>{producto.quantity}</p>
                <p>{producto.nombre}</p>
                <span>${producto.precio}</span>
                <p>precio total:${producto.precio * producto.quantity}</p>
                <button onClick={() => deleteItem(producto.id)} className="boton-eliminar"><i  className="i-eliminar bi-trash-fill"></i></button>
              </div>
          </div>
        </div>
  )
}

export default CartItem;