import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-rxjs05',
  templateUrl: './rxjs05.component.html',
  styleUrl: './rxjs05.component.css'
})
export class Rxjs05Component implements OnInit {

  fetchData: string = '';
  isLoading: boolean = true;


  ngOnInit(): void {
    timer(3000).subscribe(() => {
      this.isLoading = false;
      this.fetchData = 'Timer function executed...';
    });
  }
}
