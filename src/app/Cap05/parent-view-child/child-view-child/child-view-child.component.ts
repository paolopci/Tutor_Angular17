import { Component } from '@angular/core';

@Component({
  selector: 'app-child-view-child',
  templateUrl: './child-view-child.component.html',
  styleUrl: './child-view-child.component.css'
})
export class ChildViewChildComponent {
  count: number = 0;

  incrementCounter() {
    this.count++;
  }
}
