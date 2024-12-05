import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./style.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App()
{
    const [checkoutIsDisplayed, setCheckoutIsDisplayed] = useState(false);
    const [purchaseAmountDisplayed, setPurchaseAmountDisplayed] = useState(0);
    const [checkoutTotal, setCheckoutTotal] = useState(0);
    const [checkoutItems, setCheckoutItems] = useState([]);

    function toggleDisplay()
    {
        setCheckoutIsDisplayed(prevState => !prevState);
    }

    function addItem(name, price)
    {
        console.log(name);
        console.log(price)

        const newCheckoutObj = 
        {
            id: uuidv4(),
            itemName: name,
            itemPrice: price
        }

        setCheckoutItems((checkoutItems) => [...checkoutItems, newCheckoutObj]);

        setCheckoutTotal(prevTotal => (prevTotal += price));
        setPurchaseAmountDisplayed(prevAmount => (prevAmount += 1));
    }

    function removeItem(id, price)
    {
        setCheckoutItems(checkoutItems.filter(item => item.id !== id));

        setCheckoutTotal(prevTotal => {
            (prevTotal -= price)

            return prevTotal === 0 ? 0 : prevTotal;
        });

        //removes the item from the checkout based on if the user clicks to remove the item from checkout.
        setPurchaseAmountDisplayed(prevAmount => (prevAmount -= 1));
    }

    return(
        <div class="container">
            <Header toggleDisplay={toggleDisplay} purchaseAmountDisplayed={purchaseAmountDisplayed} />
            <Body checkoutIsDisplayed={checkoutIsDisplayed} addItem={addItem} removeItem={removeItem} checkoutItems={checkoutItems} checkoutTotal={checkoutTotal} />
        </div>
    )
}

export default App;