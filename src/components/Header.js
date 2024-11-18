import React from "react";

function Header()
{
    return(
        <div class="row header-row">
            <div class="col-6">
                <h1>Store Title</h1>
            </div>
            <div class="col-6 d-flex justify-content-end">
                <button>Item Quantity in Shopping Cart</button>
                <button>Checkout Icon</button>
            </div>
        </div>

    )
}

export default Header;