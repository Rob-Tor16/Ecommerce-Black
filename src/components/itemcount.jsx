import './itemcount.css';
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity (quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity -1)
        }
    }

    return(
        <div className="contenedor-contador">
            <div className="controles">
                <button className="boton" onClick={decrement}>-</button>
                <span className="numero">{quantity}</span>
                <button className="boton" onClick={increment}>+</button>  
            </div>
            <div>
                <button className="agregar" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;