import { Component } from '@angular/core';

@Component({
  selector: 'app-app-increment-count',
  templateUrl: './app-increment-count.component.html',
  styleUrl: './app-increment-count.component.css'
})
export class AppIncrementCountComponent {
  counterVal = 0;
  incrementCounter() {
    this.counterVal++;
  }
}
