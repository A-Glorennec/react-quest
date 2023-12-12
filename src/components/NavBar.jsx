const NavBar = ({ pokemonList, onPokemonClick }) => {

    return (
        <nav>
          {pokemonList.map((pokemon, index) => (
            <button key={index} onClick={() => onPokemonClick(index)}>{pokemon.name}</button>
          ))}
        </nav>
    )
}

export default NavBar;