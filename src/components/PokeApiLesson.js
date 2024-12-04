import React, { useState, useEffect } from "react";

const PokemonApp = () => {
  const [pokemon, setPokemon] = useState(null); // Store the current Pokémon's data
  const [page, setPage] = useState(1); // Page number corresponds to Pokémon index

  const fetchPokemon = (page) => {
    // Construct the URL directly within the fetch
    fetch(`https://pokeapi.co/api/v2/pokemon/${page}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data); // Save the Pokémon data
      })
  };

  useEffect(() => {
    fetchPokemon(page);
  }, [page]); // Refetch Pokémon when the page changes

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrevious = () => setPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div>
        <div className="row">
            <div className="col-12">
                {pokemon ? (
                  <div>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: "150px" }} />
                    <p>Weight: {pokemon.weight}</p>
                  </div>
                ) : (
                  <p>No Pokémon data available.</p>
                )}           
            </div>
        </div>

        <button onClick={handlePrevious} disabled={page === 1}>Previous</button>
        <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PokemonApp;