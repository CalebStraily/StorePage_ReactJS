import React from "react";

function Header({toggleDisplay, purchaseAmountDisplayed})
{
    return(
        <div class="row header-row">
            <div class="col-6">
                <h1>Cal's Price Cutters</h1>
            </div>
            <div class="col-6 d-flex justify-content-end">
                <div className="purchase-amount">{purchaseAmountDisplayed}</div>
                <button onClick={toggleDisplay}><img className="img-fluid" src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-1985-thumb.png" alt=""></img></button>
            </div>
        </div>

    )
}

export default Header;