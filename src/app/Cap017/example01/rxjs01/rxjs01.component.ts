import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-rxjs01',
  templateUrl: './rxjs01.component.html',
  styleUrl: './rxjs01.component.css'
})
export class Rxjs01Component {


  constructor() {
    const obj1$ = of({ name: 'Paolo', age: 59 }, [1, 2, 3, 4, 5], function msg() { return 'Ciao Paolo' });

    obj1$.subscribe(result => console.log(result));
  }
}
