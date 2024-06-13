import { Component, OnInit } from '@angular/core';
import { of, map } from 'rxjs';


@Component({
  selector: 'app-rxjs07',
  templateUrl: './rxjs07.component.html',
  styleUrl: './rxjs07.component.css'
})
export class Rxjs07Component implements OnInit {


  ngOnInit(): void {
    const obs$ = of(1, 2, 3, 4, 5, 6);
    const newObs$ = obs$.pipe(
      map(n => n * 2)

    );
    newObs$.subscribe(val => console.log(val));

    const nomi$ = of('paolo', 'gigi', 'carlo', 'simone', 'luca');
    const no$ = nomi$.pipe(
      map(v => v.toUpperCase())
    );
    no$.subscribe(c => console.log(`nome: ${c}`));
  }
}
