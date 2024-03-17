/* eslint-disable no-new */
import { Footer } from './component/footer';
import { Header } from './component/header';
import { fetchPokemon } from './component/poke-fetch';
import './style.css';

const title = '<img src="./public/pokemon-logo.svg" alt="pokemon logo">';
new Header('body', title);
fetchPokemon();
new Footer('body');
