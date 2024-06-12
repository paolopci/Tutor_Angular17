import { Component, OnInit } from '@angular/core';
import { Observable, interval, timer } from 'rxjs';



@Component({
  selector: 'app-rxjs03',
  templateUrl: './rxjs03.component.html',
  styleUrl: './rxjs03.component.css'
})
export class Rxjs03Component implements OnInit {



  ngOnInit() {
    timer(0,1000).subscribe(val => console.log(`Timer Value: ${val}`));
    interval(1000).subscribe(val => console.log(`Interval Value: ${val}`));


  }

}
