import React from "react";

function CheckoutRender(props)
{
    return(
        <div class="row checkout-row">
            <div class="col-12">
                {`${props.name} - $${props.price.toFixed(2)}`}
                <button onClick={() => props.removeItem(props.id, props.price)}>Remove</button>
            </div>
        </div>

    )
}

export default CheckoutRender;