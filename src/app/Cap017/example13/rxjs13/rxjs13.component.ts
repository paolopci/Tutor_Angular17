import { Component, OnInit } from '@angular/core';
import { concatMap, interval, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-rxjs13',
  templateUrl: './rxjs13.component.html',
  styleUrl: './rxjs13.component.css'
})
export class Rxjs13Component implements OnInit {

  source$ = of(10, 20, 30);

  ngOnInit(): void {
    this.source$.pipe(
      switchMap((val) => {
        console.log('Source value: ', val);
        console.log('Starting new Observable');
        return interval(1000).pipe(take(3));
      })
    )
      .subscribe(x => console.log('Interval value: ', x));
  }
}
