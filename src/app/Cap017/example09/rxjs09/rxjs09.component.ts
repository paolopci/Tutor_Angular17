import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-rxjs09',
  templateUrl: './rxjs09.component.html',
  styleUrl: './rxjs09.component.css'
})
export class Rxjs09Component implements OnInit {
  cursorPoint$?: Observable<{ x: number, y: number }> | undefined;

  ngOnInit(): void {
    this.cursorPoint$ = fromEvent<MouseEvent>(window, 'mousemove')
      .pipe(
        map((result) => ({ x: result.clientX, y: result.clientY }))
      );

    this.cursorPoint$.subscribe(result => console.log(`X: ${result.x} Y: ${result.y}`));
  }
}
