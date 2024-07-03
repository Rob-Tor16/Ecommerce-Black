import { useState, useEffect } from 'react'
import ItemDetail from './itemdetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import  Loader  from "./loading";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const id = useParams().id;

    useEffect(() => {

        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resp) => {
                setProduct(
                    {...resp.data(), id: resp.id }
                );
            })
    }, [id])

    if(product){
        return (
            <div>
                 <ItemDetail {...product}/>
            </div>
         )
    }
    return <Loader/>
}

export default ItemDetailContainer;