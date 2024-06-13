import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-client01',
  templateUrl: './http-client01.component.html',
  styleUrl: './http-client01.component.css'
})
export class HttpClient01Component {

  responseData: any | undefined;
  loadData: boolean = false;

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get<any> ('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      this.responseData = data;
      this.loadData = true;
      console.log(data);
    });
  }

}
