import { UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  // Señales computadas
  HeroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  getHeroDescription() {
    return `Mi nombre es ${this.name()} y tengo ${this.age()} años`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }

  getCapitalizedName() {
    return this.name().toLocaleUpperCase();
  }
}
