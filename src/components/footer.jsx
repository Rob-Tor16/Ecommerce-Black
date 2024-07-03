import React from 'react'
import "./footer.css";

export const Footer = () => {
    return (
      <footer className="Footer">
          <div className="footer-div">
              <h4>Metodos de pago</h4>
                <img src="./img/visa.png" alt="" className="tarjetas"/>
                <img src="./img/rapipago@2x.png" alt="" className="tarjetas"/>
                <img src="./img/mastercard.png" alt="" className="tarjetas"/>
                <img src="./img/Pago-Facil.jng" alt="" className="tarjetas"/>
                <img src="./img/cencosud@2x.png" alt="" className="tarjetas"/>
                <img src="./img/cabal@2x.png" alt="" className="tarjetas"/>
                <img src="./img/tarjeta-naranja@2x.png" alt="" className="tarjetas"/>
                <img src="./img/diners@2x.png" alt="" className="tarjetas"/>
                <img src="./img/banelco@2x.png" alt="" className="tarjetas"/>
                <img src="./img/tarjeta-shopping@2x.png" alt="" className="tarjetas"/>
                <img src="./img/mercadopago@2x.png" alt="" className="tarjetas"/>
                <img src="./img/a-express.png" alt="" className="tarjetas"/>
          </div>
          <div className="footer-div">
          <h4>Formas de envío</h4>
                <img src="./img/correo-argentino.png" alt="" className="tarjetas"/>
                <img src="./img/oca@2x.png" alt="" className="tarjetas"/>
          </div>
          <div class="footer-div">
            <h4>Redes Sociales</h4>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
        </div>
        <div class="footer-div">
            <h4>contactanos</h4>
                <ul>
                    <li>
                        <i class="bi bi-telephone-fill"></i> +54 9 2235452718
                    </li>
                    <li>
                        <i class="bi bi-envelope"></i> blackMDQ@gmail.com
                    </li>
                    <li>
                        <i class="bi bi-geo-alt"></i> Alberti 1625, Mar del Plata
                    </li>
                </ul>
        </div>
          
      </footer> 
    )
      
}

export default Footer;