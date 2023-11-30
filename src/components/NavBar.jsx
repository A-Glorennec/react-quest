const NavBar = ({ pokemonIndex, setPokemonIndex, pokemonList}) => {
    const previousPokemon = () => {
        setPokemonIndex((prevIndex) => (prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1));
      };
    
      const nextPokemon = () => {
        setPokemonIndex((prevIndex) => (prevIndex === pokemonList.length - 1 ? 0 : prevIndex + 1));
      };
    
    return (
        <nav>
        {pokemonIndex > 0 && <button onClick={previousPokemon}>Précédent</button>}
        {pokemonIndex < pokemonList.length - 1 && <button onClick={nextPokemon}>Suivant</button>}
        </nav>
    )
}

export default NavBar;