import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartItem } from "../../../types/typeApp";
import { faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from  "react-bootstrap";
import "./style.css";

type Props = {
    item:CartItem
}
const Item =()=>{
    return (
        <>
         <div className="shopping-cart-item">
            <div className="item-action">
                <Button variant="secondary">
                    <FontAwesomeIcon icon={faPlus} color="white" />
                    <FontAwesomeIcon icon={faMinus} color="white" />
                </Button>
            </div>
            <div className="item-detail">
                <div className="item-detail-image">
                    <image src={item.image} alt={item.title}/>
                </div>
                <div className="item-detail-info">
                    <div className="item-detail-info-name">
                        {item.title}
                    </div>
                    <div className="item-detail-info-prices">
                        <span>{item.price}</span>
                    </div>
                </div>
            </div>
            <div className="item-action-remove">
                <Button
                    variant="danger"
                    Title="Retirar produto do carrinho">
                    <FontAwesomeIcon icon={faTrashAlt} color="white"     
                </Button>
            </div>
         </div>
        
        </>

    )
}

export default Item;