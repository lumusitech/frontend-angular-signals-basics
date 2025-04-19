import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styles: ``,
})
export default class DragonballPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    { id: 2, name: 'Vegeta', power: 9500 },
    { id: 3, name: 'Yamcha', power: 900 },
    { id: 4, name: 'Trunks', power: 9000 },
    { id: 5, name: 'Krilin', power: 500 },
  ]);
}
