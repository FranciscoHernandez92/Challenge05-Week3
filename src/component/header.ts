import { Component } from './component';

export class Header extends Component {
  title: string;
  constructor(selector: string, title: string) {
    super(selector);
    this.title = title;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header class="header">
      <h1 class="header__title">${this.title}</h1>
        <nav>
          <ul>
            <li><a href="./index.html" class = 'poke-nav'>Home</a></li>
            <li><a href="./pokedex.html" class = 'poke-nav'>Pokedex</a></li>
            <li><a href="#" class = 'poke-nav'>Favourites</a></li>
          </ul>
        </nav>
    </header>
    `;
  }
}
