import  ItemList  from "./itemlist";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;

    useEffect(() => {
        
      const productosRef = collection(db, "productos");
      const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

      getDocs(q)
        .then((resp) => {

          setProductos(

            resp.docs.map((doc) => {
              return{...doc.data(), id: doc.id}
            })
          )
        })

    }, [categoria])
    
   

    
  return (
    <main className="main">
        <ItemList productos={productos} />
    </main>
  )
}

export default ItemListContainer;