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
    <li>Name: ${poke.id}</li>
    <li>Type: ${poke.name}</li>
    <li>Adopted: ${poke.type}</li>
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
