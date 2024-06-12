import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homerxjs04',
  templateUrl: './homerxjs04.component.html',
  styleUrl: './homerxjs04.component.css'
})
export class Homerxjs04Component {
  value$: Observable<number>;
  timeValue$: Observable<any>;
  iterValue$: Observable<number[]>;


  constructor() {
    this.value$ = new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.next(4);
        observer.complete();
      }, 2000);
    });

    // time
    this.timeValue$ = new Observable<any>((observer) => {
      setInterval(() => {
        const date = new Date();
        const estTime = date.toLocaleString('it-IT', {
          timeZone: 'Europe/Rome',
          dateStyle: 'full',
          timeStyle: 'full'
        });
        observer.next(estTime);
      }, 1000);
    });

    this.iterValue$ = new Observable<number[]>((observer) => {
      observer.next([1, 2, 3, 4, 5, 6, 7]);
      observer.complete();
    })


  }
}
