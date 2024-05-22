import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrl: './child-output.component.css'
})
export class ChildOutputComponent {
  @Output() myEvent = new EventEmitter();
  @Output() myPerson = new EventEmitter<user>();

  person: { name: string; age: number; country: string; city: string } = {
    name: 'Gigi',
    age: 45,
    country: 'Italy',
    city: 'Pesaro'
  }

  emitEvent() {
    this.myEvent.emit('Event emitted from child component');

  }

  personEmit() {
    this.myPerson.emit(this.person);
  }
}

export interface user {
  name: string;
  age: number;
  country: string;
  city: string;
}
