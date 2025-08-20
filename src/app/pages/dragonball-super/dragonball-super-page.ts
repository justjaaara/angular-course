import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { DragonballCharacterAddComponent } from '../../components/dragonball/dragonball-character-add/dragonball-character-add.component';
import { DragonballService } from '../../services/dragonball.service';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPage {
  public dragonballService = inject(DragonballService);
}
