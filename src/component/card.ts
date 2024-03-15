import { Component } from './component';

export class Card extends Component {
  poke: object;
  constructor(selector: string, poke: object) {
    super(selector);
    this.poke = poke;
    this.render();
  }

  render(): void {
    this.template = this.createTemplate();
    super.render();
  }

  dataPoke = (poke: any) => `
    <li>Nº: ${poke.id}</li>
    <li>Name: ${poke.name}</li>
    <li>Type: ${poke.type}</li>
    <li>Description: ${poke.description}</li>
    <li>Weakness: ${poke.weakness}</li>
    `;

  createTemplate() {
    const item = this.poke;
    return `
    <ul>
    <li>${this.dataPoke(item)}</li>
    </ul>
    `;
  }
}
