import { Component, signal } from '@angular/core';
import { AddCharacterComponent } from '../../components/dragonball/add-character/add-character.component';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import type { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent, AddCharacterComponent],
  templateUrl: './dragonball-super-page.component.html',
  styles: ``,
})
export default class DragonballSuperPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    { id: 2, name: 'Vegeta', power: 9500 },
  ]);

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
}
