import Item from "./item";
import Loading from "./loading";

const ItemList = ( {productos} ) => {
    

    return(
        <>
            {productos.length === 0 ?(
                    <Loading/>
                ): (
                    
                    <div className="contenedor-productos">
                        
                    { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}        
                    </div>
                ) 
            }     
        </>  
    )
}

export default ItemList;