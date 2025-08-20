import { effect, Injectable } from '@angular/core';

import { signal } from '@angular/core';
import { Character } from '../interfaces/caracter.interface';

// Es creada por fuera porque no tiene que ver con el servicio sino que se usa una única vez
const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');

  // No es la mejor práctica (Hay que validar):
  return characters ? JSON.parse(characters) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    console.log(`Character count ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }
}
