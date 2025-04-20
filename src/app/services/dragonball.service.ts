import { effect, Injectable, signal } from '@angular/core';
import type { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = () => {
  const characters = JSON.parse(localStorage.getItem('characters') || '[]');

  if (!(characters instanceof Array)) return [];

  return isInstanceOfCharacters(characters) ? characters : [];
};

const isInstanceOfCharacters = (characters: any[]) => {
  return characters.every(
    (character: any) =>
      'id' in character && 'name' in character && 'power' in character
  );
};

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
}
