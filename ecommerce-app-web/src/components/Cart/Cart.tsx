import React from "react";
import { useContext } from "react"; 
import { CartContext } from "../../context/CartContext";
import Item from "./Item/Item";
import "./style.css";

const Cart =()=>{
    const { cartItems } = useContext(CartContext);
    if(!cartItems.lenght) return <h5>Nenhum item adicionado</h5>;
    return (
        <div className="shopping-cart">
            cartItems.map(item => {
                <Item key={ Item.id } item={item} />
            })
        </div>

    )
}

export default Cart;