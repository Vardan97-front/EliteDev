import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default React.memo(function PokemonCard({
    url,
}) {
    const [pokemon, setPokemon] = useState();
    const navigate = useNavigate();

    const openPokemon = () => {
        navigate(`/${pokemon.id}`);
    };

    const getPokemon = useCallback(async () => {
        await fetch(url)
            .then(res => res.json())
            .then((result) => {
                setPokemon(result);
            })
      }, [])

    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <div
        className="card"
        onClick={openPokemon}
        >
            <>
                {pokemon && (
                    <div className='cardBody'>
                        <div className='cardImageBlock'>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        </div>

                        <h2 className='cardTitle'>{pokemon.name}</h2>
                    </div>
                )}
            </>
            
        </div>
    );
});