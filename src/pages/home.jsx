import React, { useEffect, useState, useCallback } from 'react';

import Input from '../components/Input';
import PokemonCard from '../components/PokemonCard';

export default React.memo(function Home() {
  const BASE_URL = "https://pokeapi.co/api/v2";

  const [pokemonsList, setPokemonsList] = useState([]);

  const searchPokemons = (path, value) => {
    console.log(path, value);
  }

  const getPokemonsList = useCallback(async () => {
    await fetch(`${BASE_URL}/pokemon?limit=16&offset=0`)
      .then(res => res.json())
      .then((result) => {
        setPokemonsList(result.results);
      });
  }, [])

  useEffect(() => {
    getPokemonsList();
  }, [])

  return (
    <div className='home'>
      <Input
        type="text"
        placeHolder="Search..."
        loading={false}
        name="search"
        value=""
        change={searchPokemons}
        prevIcon
        blockClass="homeSearchBlock"
        inputClass="homeSearchInput"
      />

      <div className='pokemonsList'>
        {pokemonsList.map((pokemon, index) => (
          <PokemonCard
            key={`${pokemon.name}${index}`}
            url={pokemon.url}
          />
        ))}
      </div>
    </div>
  );
})