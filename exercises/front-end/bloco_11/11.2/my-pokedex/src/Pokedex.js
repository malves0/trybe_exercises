import React from 'react'
import Pokemon from './Pokemon'
import pokemons from './data'

class Pokedex extends React.Component {
    render() {  
        return (
            <div> 
                { pokemons.map (pokemon => <Pokemon key={pokemons.id} pokemon={pokemon}/>)}
            </div>
        );
    }
}




export default Pokedex;