import { Component, OnInit, Pipe } from '@angular/core';
import { filter, of, map, from, Observable } from 'rxjs';


@Component({
  selector: 'app-rxjs08',
  templateUrl: './rxjs08.component.html',
  styleUrl: './rxjs08.component.css'
})
export class Rxjs08Component implements OnInit {

  person: Observable<any> | undefined = from([
    { name: 'Paolo', age: 59 },
    { name: 'Simone', age: 36 },
    { name: 'Lucia', age: 21 },
    { name: 'Carlo', age: 16 },
    { name: 'Marco', age: 41 },
    { name: 'Franco', age: 71 },
    { name: 'Alessia', age: 23 },
  ])




  ngOnInit(): void {
    const observable$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    const even$ = observable$.pipe(
      filter(val => val % 2 == 0),
      map((x: number) => x * 2)
    );
    const odd$ = observable$.pipe(
      filter(x => x % 2 != 0),
      map((x: number) => x * 33)
    );

    const persons$ = this.person?.pipe(
      filter(person => person.age >= 55)
    );



    // subscribe
    even$.subscribe(x => console.log(`Numeri pari: ${x}`));
    odd$.subscribe(x => console.log(`Numeri dispari: ${x}`));
    persons$?.subscribe(x => console.log(`Person: ${x.name}, age: ${x.age}`));
  }


}
