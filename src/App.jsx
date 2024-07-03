import React from "react";
import ItemListContainer from "./components/itemlistcontainer";
import  Nav   from "./components/nav";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import 'bootstrap-icons/font/bootstrap-icons.css';
import ItemDetailContainer from "./components/itemdetailcontainer";
import Contacto from "./components/contacto";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Footer } from "./components/footer";
import { CartProvider } from "./context/cartcontext";
import { Carrito} from "./components/cart";
import CheckOut from "./components/checkout";



function App () {

  

  return (
    
      <BrowserRouter className="body">
        <CartProvider>
          <Nav /> 
              <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer />}/>
                <Route path="/productos/:categoria" element={<ItemListContainer />}/>
                <Route path="/contacto" element={<Contacto />}/>
                <Route path="/cart" element={<Carrito/>}/>
                <Route path="/checkout" element={<CheckOut/>}/>
                <Route path="*" element={<h4>Error 404: Page not found</h4>}/>
              </Routes>     
          <Footer/>
        </CartProvider>  
      </BrowserRouter>
    
            
  )
}


export default App;