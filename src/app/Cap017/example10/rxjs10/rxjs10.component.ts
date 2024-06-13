import { Component, OnInit } from '@angular/core';
import { from, mergeMap, of } from 'rxjs';


@Component({
  selector: 'app-rxjs10',
  templateUrl: './rxjs10.component.html',
  styleUrl: './rxjs10.component.css'
})
export class Rxjs10Component implements OnInit {
  outerObservable$ = from([1, 2, 3, 4, 5]);
  innerObservable$ = (value: number) => of(value * 2);
  num: number[] = [];

  flatterObservable$ = this.outerObservable$.pipe(
    mergeMap(this.innerObservable$)
  );

  ngOnInit(): void {
    this.flatterObservable$.subscribe(x => {
      this.num.push(x);
      console.log(x);
    });
  }

}
