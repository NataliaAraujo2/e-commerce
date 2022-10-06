import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { calculateTotal } from "../../../helpers/calculate";

import "./style.css"

const Footer =()=>{
    const { cartItems } = useContext(CartContext);
    return (
        <div>
            { calculateTotal(cartItems)}
        </div>

    )
}

export default Footer;