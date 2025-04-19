import { Component, signal } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
})
export default class NameComponent {
  counterSignal = signal(10);

  increaseBy(value: number): void {
    if (this.counterSignal() + value < 0) return;

    this.counterSignal.update((prev) => prev + value);
  }

  resetCounter(): void {
    this.counterSignal.set(0);
  }
}
