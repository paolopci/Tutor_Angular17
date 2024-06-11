import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homerxjs02',
  templateUrl: './homerxjs02.component.html',
  styleUrl: './homerxjs02.component.css'
})
export class Homerxjs02Component {
  observable = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      console.log('---After two seconds---');
      observer.next(4);
      observer.complete();
    }, 2000);
  });

  constructor() {
    console.log('Before subscribe');

    this.observable.subscribe({
      next(x) {
        console.log("Value: ", x);
      },
      error(e) {
        console.log("Error occurred: ", e)
      },
      complete() {
        console.log('Observable  successfully executed');
      }
    });
    console.log('After subscribe');
  }

}
