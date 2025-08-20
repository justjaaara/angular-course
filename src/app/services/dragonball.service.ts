import { Injectable } from '@angular/core';

import { signal } from '@angular/core';
import { Character } from '../interfaces/caracter.interface';

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }
}
