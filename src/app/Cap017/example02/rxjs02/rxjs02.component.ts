import { Component, OnInit } from '@angular/core';
import { resolve } from 'path';
import { from } from 'rxjs';

@Component({
  selector: 'app-rxjs02',
  templateUrl: './rxjs02.component.html',
  styleUrl: './rxjs02.component.css'
})
export class Rxjs02Component implements OnInit {

  ngOnInit(): void {
    const arr = from([1, 2, 3, 4, 5, 6, 7])
      .subscribe((result) => console.log(result));

    // promise
    const p = from(new Promise(resolve => resolve('This is a resolve message')))
      .subscribe(val => console.log(val));

    // convert Map
    const m = new Map();
    m.set(1, "Paolo");
    m.set(2, "Silvia");
    m.set(3, "Convert Map() to Observable");

    const mapObj = from(m);
    mapObj.subscribe(mp=>console.log(mp));
  }

}
