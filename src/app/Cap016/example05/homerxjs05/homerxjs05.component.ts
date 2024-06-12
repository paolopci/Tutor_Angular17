import { Component } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homerxjs05',
  templateUrl: './homerxjs05.component.html',
  styleUrl: './homerxjs05.component.css'
})
export class Homerxjs05Component {
  jsonData$: Observable<any> | undefined;  // con undefined non devo usare constructor x initialize


  constructor() {
    this.fetchData();
  }
  fetchData() {
    this.jsonData$ = new Observable<any>((observer) => {
      fetch('https://dummyjson.com/products/categories')
        .then(response => response.json())
        .then((data) => {
          observer.next(data);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });
  }
}
