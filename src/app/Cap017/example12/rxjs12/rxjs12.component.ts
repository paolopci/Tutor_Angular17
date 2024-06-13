import { Component, OnInit } from '@angular/core';
import { concatMap, of } from 'rxjs';


@Component({
  selector: 'app-rxjs12',
  templateUrl: './rxjs12.component.html',
  styleUrl: './rxjs12.component.css'
})
export class Rxjs12Component implements OnInit {
  sourceObservable$ = of(1, 2, 3);
  innerObservable$ = of('A', 'B', 'C');

  ngOnInit(): void {
    const outObservable$ = this.sourceObservable$.pipe(
      concatMap((val) => {
        let myv=val;
        console.log('Source value:', val);
        console.log('Starting new observable');
        return this.innerObservable$;
      }),
    )
      .subscribe(x => console.log(x));
  }

}
