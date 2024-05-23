import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  displayMessage: string = 'Message from parent component';
  counter: number = 0;

  courses: { id: number; name: string }[] = [
    { id: 1, name: 'JavaScript - Marathon Interview Questions Series' },
    { id: 2, name: 'Mastering React With Interview Questions, eStore Project' },
    { id: 3, name: 'Mastering TypeScript With Marathon Interview Questions' },
    { id: 4, name: 'Mastering HTML,CSS,Sass,Bootstrap + Interview Questions' }
  ];
  update() {
    this.counter++;
    this.displayMessage = this.displayMessage + this.counter;
  }

}
