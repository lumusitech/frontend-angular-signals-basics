import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-add-character',
  imports: [],
  templateUrl: './add-character.component.html',
  styles: ``,
})
export class AddCharacterComponent {
  name = signal('');
  power = signal(0);
  addEvent = output<Character>();

  addCharacter() {
    if (!this.name().trim() || !this.power() || this.power() < 0) return;

    this.addEvent.emit({
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    });

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
