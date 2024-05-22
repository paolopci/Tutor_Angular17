import { Component } from '@angular/core';

@Component({
  selector: 'app-onchange',
  templateUrl: './onchange.component.html',
  styleUrl: './onchange.component.css'
})
export class OnchangeComponent {
  inputValue: string = 'Now Paolo,  Value 2024';
  counter: number = 0;


  updateValue() {
    this.counter++;
    this.inputValue = "Angular datetime" +this.counter;
  }

}
