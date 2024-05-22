import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  displayMessage: string = 'Message from parent component';
  counter: number = 0;
  update() {
    this.counter++;
    this.displayMessage = this.displayMessage + this.counter;
  }

}
