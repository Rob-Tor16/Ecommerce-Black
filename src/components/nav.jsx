import CartWidget from "./cartwidget";
import { Link } from "react-router-dom";
import './nav.css';

  const Nav = () => {
   
    
    return <header className="header">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link to="/"><img src="/img/logo-blackmdq.png" alt="" className="img-fluid"/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                        <CartWidget/>
                        <input type="checkbox" id="check"/>
                        <label class="open-menu" id="open-menu">
                            <i class="bi bi-list"></i>
                        </label>
                        </div>
                    </div>
                </nav>
                <div className="categoria">
                    <button for="check" class="close-menu" id="close-menu">
                    <i class="bi bi-x-circle-fill"></i>
                    </button>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-light"><Link  to="/productos/Buzos">Buzos</Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-light"><Link  to="/productos/Remeras">Remeras</Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-light"><Link  to="/productos/Accesorios">Accesorios</Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-light"><Link  to="/productos/Tops">Tops</Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-light"><Link to="/productos/Sweaters">Sweaters</Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-light"><Link  to="/productos/Pantalones">Pantalones</Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-light"><Link  to="/productos/Polleras">Polleras</Link></button>
                        </li>
                    </ul>
                </div>
        </header> 
            
            
                          
  }

  export default Nav;