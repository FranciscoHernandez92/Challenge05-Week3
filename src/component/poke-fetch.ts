import { type Pokemon } from './poke-type';

export const fetchPokemon = () => {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  const container = document.querySelector('main');

  fetch(urlPokemon)
    .then(async (res) => res.json())
    .then(async ({ results: pokemonList }) => {
      let pokemonHTML = '';

      for (const { name, url } of pokemonList) {
        const pokemonData: Pokemon = await fetchPokemonData(url);

        pokemonHTML += `
          <ul>
            <li class = 'pokebox'>
              <a href="./pokedex.html">
                <img src="${pokemonData.sprites.front_default}" 
                alt="${name}" title="${name}">
                <p>${name.toUpperCase()}</p>
              </a>
            </li>
          </ul>
        `;
      }

      container.insertAdjacentHTML('beforeend', pokemonHTML);
    })
    .catch((error) => {
      console.error('Error fetching Pokemon:', error);
    });
};

async function fetchPokemonData(url: string): Promise<Pokemon> {
  const response = await fetch(url);
  return response.json();
}
