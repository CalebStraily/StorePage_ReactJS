import React, { useState, useEffect } from "react";

function DataImport(props)
{
    const [groceryData, setGroceryData] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetch(`http://localhost:4001/api/items`)
            .then(res => res.json())
            .then(data => setGroceryData(data))
    }, []);

    console.log(groceryData);

    const filteredData = selectedCategory
        ? groceryData.filter(item => item.cat_name === selectedCategory)
        : groceryData;

    console.log(filteredData);

    return(
        <div className="row">
            <div class="row item-category-row">
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
            {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                    <div className="col-4 item-column" key={index}>
                        <ul>
                            <li>
                                <li><h2>{item.name}</h2></li>
                                <li>{item.description}</li>
                                <li>{`$${item.price.toFixed(2)} Rating: ${item.rating}`}</li>
                                <li>
                                    <button onClick={() => props.addItem(item.name, item.price)}>Add Item to Cart</button>
                                </li>
                            </li>
                        </ul>
                    </div>
                ))
            ) : (
                <p>loading...</p>
            )}
        </div>
    )
}

export default DataImport;