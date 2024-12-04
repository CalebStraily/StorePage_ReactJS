import React, { useState, useEffect } from "react";

function UseEffect()
{
    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(1);
    const [category, setCategory] = useState("people");

    //Don't fetch API Links without useEffect!
    //Why? It will infinitely rerender the component.
    /*
    fetch('https://swapi.py4e.com/api/people/1')
        .then(res => res.json())
        .then(data => setStarWarsData(data))

        console.log(starWarsData);
    */

    //First one is required
    //Second parameter is optional
    //The array list will watch for certain variable changes. If that VAR changes "useEffect" function will be ran
    //If the Array List is empty it will run only the first time the component loads.

    useEffect(() => {
        fetch(`https://swapi.py4e.com/api/${category}/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))

    }, [count, category]);
    
    console.log(starWarsData);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setCategory(selectedValue);
        setCount(1);
    };

    return(
        <div className="row">
            <div className="col-12">
                <h1>UseEffectSection</h1>
            </div>
            <div className="col-12">
                <select onChange={handleChange}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="films">Films</option>
                    <option value="species">Species</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="starships">Starships</option>
                </select>
            </div>
            <div className="col-12">
                <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
                <h3 onClick={() => setCount(prevCount => prevCount + 1)}>{count}</h3>
            </div>
        </div>
    )
}

export default UseEffect;