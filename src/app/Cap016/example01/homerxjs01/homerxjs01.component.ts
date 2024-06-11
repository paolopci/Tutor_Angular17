import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homerxjs01',
  templateUrl: './homerxjs01.component.html',
  styleUrl: './homerxjs01.component.css'
})
export class Homerxjs01Component {

  observable = new Observable((observer) => {
    observer.next('Hello');
    observer.complete();
    observer.error('un errore è occorso!!!!');
  }).subscribe({
    next(value) {
      console.log('Received value: ', value);

    },
    error(err) {
      console.log('Error:', err);
    },
    complete(){
      console.log('Observable completed ...');
    }
  });

}

