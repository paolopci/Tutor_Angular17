import { Component } from '@angular/core';

@Component({
  selector: 'app-template-outlet19',
  templateUrl: './template-outlet19.component.html',
  styleUrl: './template-outlet19.component.css'
})
export class TemplateOutlet19Component {
  showDetails = {
    name: 'Alex',
    age: 29,
    location: 'New York'
  };

  a=10;
  b=20;

  calc(){
    return this.a+this.b;
  }
}
