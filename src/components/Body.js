import React, {useState} from "react";
import ItemsRender from "./ItemsRender";
import CheckoutRender from "./CheckoutRender";
import DataImport from "./DataImport";

function Body({checkoutIsDisplayed, addItem, removeItem, checkoutItems, checkoutTotal})
{
    return(
        <div class="row body-container">
            <div class="col-8">
                <DataImport addItem={addItem} />
            </div>
            {checkoutIsDisplayed && (
                <div class="col-4">
                    <div class="row">
                        <div class="col-xl-12 col-4 checkout-container">
                            <table>
                                <tr>
                                    <th>Item Checkout</th>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="row">
                                            {checkoutItems.map((item) => (
                                                <CheckoutRender id={item.id} name={item.itemName} price={item.itemPrice} removeItem={removeItem} checkoutTotal={checkoutTotal} />
                                            ))}
                                            {`Total: $${checkoutTotal.toFixed(2)}`}
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Body;