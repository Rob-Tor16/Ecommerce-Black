import "./cartwidget.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartcontext";

export const CartWidget = () => {

    const {quantityInCart} = useContext(CartContext);

    return(
            <div className="cartwidget">
                
                <Link className="cart"to="/cart"><span>{quantityInCart()}</span><i className="bi bi-cart3"></i></Link>
                   
            </div>  
            
        
        
            
    );
}

export default CartWidget;