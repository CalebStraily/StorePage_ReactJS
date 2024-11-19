import React from "react";

function ItemsRender(props)
{
    return(
        <div class="col-xl-4 col-12 item-column">
            <ul>
                <li><h2>{props.name}</h2></li>
                <li>{props.description}</li>
                <li>{`$${props.price.toFixed(2)} Rating: ${props.rating}`}</li>
                <li>
                    <button onClick={() => props.addItem(props.name, props.price)}>Add Item to Cart</button>
                </li>
            </ul>
        </div>
    )
}

export default ItemsRender;