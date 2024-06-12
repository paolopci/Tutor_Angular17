import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homerxjs03',
  templateUrl: './homerxjs03.component.html',
  styleUrl: './homerxjs03.component.css'
})
export class Homerxjs03Component {


  observable = new Observable<number>((observer) => {
    let count = 0;

    const interval = setInterval(() => {
      observer.next(count++);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log('Interval Cleared...');
    }
  });


  constructor() {
    const obj = this.observable.subscribe((result) => {
      console.log(result);
    });

    setTimeout(() => {
      obj.unsubscribe();
      console.log('Unsubscribed');
    }, 6000);
  }

}
