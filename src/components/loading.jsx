import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Spinner } from "react-bootstrap";
import "./loading.css";

 const Loader = () => {
  return (
    <div class="contenedor-spinner">
        <Spinner color="dark"/>
    </div>
  )
}

export default Loader;