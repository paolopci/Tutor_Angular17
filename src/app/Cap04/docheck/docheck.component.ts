import { Component } from '@angular/core';

@Component({
  selector: 'app-docheck',
  templateUrl: './docheck.component.html',
  styleUrl: './docheck.component.css'
})
export class DocheckComponent {
  persona = {
    name: 'ABC',
    age:25,
    country:'IT'
  };
  counter: number = 0;

  changeUserName() {
    this.persona.name = 'Paolo ' + this.counter++;
  }
}
