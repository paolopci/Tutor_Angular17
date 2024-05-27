import { Component } from '@angular/core';

@Component({
  selector: 'app-app-increment-count',
  templateUrl: './app-increment-count.component.html',
  styleUrl: './app-increment-count.component.css'
})
export class AppIncrementCountComponent {
  counterVal = 0;
  myArray = [1, 2, 3, 4, 5];
  incrementCounter() {
    this.counterVal++;
  }

  updateValue(){
    this.myArray.push(10);
    this.myArray.push(11);
    this.myArray.push(12);
  }
}
