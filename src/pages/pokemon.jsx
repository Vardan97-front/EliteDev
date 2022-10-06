import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

export default React.memo(function Pokemon() {
    const BASE_URL = "https://pokeapi.co/api/v2";

    const [pokemon, setPokemon] = useState();
    const [species, setSpecies] = useState();

    const {id} = useParams();

    const getPokemon = useCallback(async () => {
        await fetch(`${BASE_URL}/pokemon/${id}/`)
            .then(res => res.json())
            .then((result) => {
                setPokemon(result);
            })
      }, [])

    const getSpecies = useCallback(async () => {
        await fetch(`${BASE_URL}/pokemon-species/${id}/`)
            .then(res => res.json())
            .then((result) => {
                setSpecies(result);
            })
      }, []) 

    useEffect(() => {
        getPokemon();
        getSpecies();
    }, []);

    return (
        <div
            className="pokemon"
        >
            <>
                {pokemon && species && (
                    <div className='pokemonBody'>
                        <div className='pokemonInformationBlock'>
                            <h2 className='pokemonInformationBlockName'>Image:</h2>

                            <div className='pokemonInformationImage'>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                            </div>
                        </div>

                        <div className='pokemonInformationBlock'>
                            <h2 className='pokemonInformationBlockName'>Name:</h2>

                            <h2 className='pokemonInformationTitle'>{pokemon.name}</h2>
                        </div>

                        <div className='pokemonInformationBlock'>
                            <h2 className='pokemonInformationBlockName'>Species:</h2>

                            <div className='pokemonMovesBlock'>
                                {species.egg_groups.map((spec) => (
                                    <h2 key={spec.name} className='pokemonInformationTitle'>
                                        {`${spec.name},`}
                                    </h2>
                                ))}
                            </div>
                        </div>

                        {pokemon.stats.map((stat) => (
                            <div
                                key={stat.stat.name}
                                className='pokemonInformationBlock'
                            >
                                <h2 className='pokemonInformationBlockName'>{stat.stat.name}:</h2>
            
                                <h2 className='pokemonInformationTitle'>{stat.base_stat}</h2>
                            </div>
                        ))}

                        <div className='pokemonInformationBlock'>
                            <h2 className='pokemonInformationBlockName'>Types:</h2>

                            {pokemon.types.map((type) => (
                                <h2 key={type.type.name} className='pokemonInformationTitle'>
                                    {`${type.type.name},`}
                                </h2>
                            ))}
                        </div>

                        <div className='pokemonInformationBlock'>
                            <h2 className='pokemonInformationBlockName'>Weight:</h2>

                            <h2 className='pokemonInformationTitle'>
                                {pokemon.weight}
                            </h2>
                        </div>

                        <div className='pokemonInformationBlock'>
                            <h2 className='pokemonInformationBlockName'>Moves:</h2>

                            <div className='pokemonMovesBlock'>
                                {pokemon.moves.map((move) => (
                                    <h2 key={move.move.name} className='pokemonInformationTitle'>
                                        {`${move.move.name},`}
                                    </h2>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </>
            
        </div>
    );
});