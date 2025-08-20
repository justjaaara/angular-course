import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  constructor() {}

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((currentValue) => currentValue + 1);
  }

  decreaseBy(value: number) {
    if (this.counter > 0) {
      this.counterSignal.update((currentValue) => currentValue - 1);
      this.counter -= value;
    }
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
