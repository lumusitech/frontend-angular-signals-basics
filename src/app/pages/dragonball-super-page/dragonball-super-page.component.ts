import { Component, inject } from '@angular/core';
import { AddCharacterComponent } from '../../components/dragonball/add-character/add-character.component';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent, AddCharacterComponent],
  templateUrl: './dragonball-super-page.component.html',
  styles: ``,
})
export default class DragonballSuperPageComponent {
  dragonballService = inject(DragonballService);
}
