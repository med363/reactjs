import Pokemon from "./Pokemon"


function PokemonList(props){



    return (

        <div>
            {
            props.pokemons.map( odjectPK => 
                <Pokemon data={odjectPK}  />               

              )
          }

        </div>
    )
}

export default PokemonList