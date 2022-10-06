import React from "react";
import useFetch from "../../hooks/useFetch";
import { ProductItem } from "../../types/typeApp";
import Product from "./Products/Products";

const ListProducts = ()=>{
    const {products, isLoading} = useFetch();
    //console.log(products)
    const handleAddToCart = (product:ProductItem) => {
        console.log("adicionando...")
    }
    return (
        <>
            {
                products.map(product => ( 
                    <Product  
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}/>
                ))
            }
        </>
    )
}

export default ListProducts;