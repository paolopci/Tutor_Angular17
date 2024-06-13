import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-client02',
  templateUrl: './http-client02.component.html',
  styleUrl: './http-client02.component.css'
})
export class HttpClient02Component {

  responseData$: Observable<any> | undefined;
  loadData: boolean = false;
  constructor(private http: HttpClient) { }

  getData() {
    this.responseData$ = this.http.get<any>('https://jsonplaceholder.typicode.com/users');
    this.loadData = true;
  }

}
