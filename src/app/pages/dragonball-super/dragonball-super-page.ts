import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { DragonballCharacterAddComponent } from '../../components/dragonball/dragonball-character-add/dragonball-character-add.component';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-page.css',
})
export class DragonballSuperPage {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
