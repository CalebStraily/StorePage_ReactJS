import React, {useState} from "react";
import ItemsRender from "./ItemsRender";
import CheckoutRender from "./CheckoutRender";
import { groceryData } from "./GroceryData";

function Body({checkoutIsDisplayed, addItem, removeItem, checkoutItems, checkoutTotal})
{
    const [groceries, setGroceries] = useState(groceryData);
    const [selectedCategory, setSelectedCategory] = useState('');

    const filteredGroceries = groceries.filter(item =>
        !selectedCategory || item.category === selectedCategory
    );

    return(
        <div class="row body-container">
            <div class="col-8">
                <div class="row item-category-row">
                    <div class="col-9">
                        <h3>{selectedCategory}</h3>
                    </div>
                    <div class="col-3">
                        <select onChange={(event) => setSelectedCategory(event.target.value)} value={selectedCategory}>
                            <option value="">All Categories</option>
                            <option value="Fruit">Fruit</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Vegetable">Vegetable</option>
                            <option value="Meat">Meat</option>
                            <option value="Beverage">Beverage</option>
                            <option value="Grains">Grains</option>
                            <option value="Pantry">Pantry</option>
                        </select>
                    </div>
                </div>
                <div class="row item-preview-row">
                    {filteredGroceries.map((grocery) => (
                        <ItemsRender addItem={addItem} id={grocery.id} name={grocery.name}  price={grocery.price} description={grocery.description} category={grocery.category} rating={grocery.rating} />
                    ))}
                </div>
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