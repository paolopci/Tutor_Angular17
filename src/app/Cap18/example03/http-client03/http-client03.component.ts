import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-client03',
  templateUrl: './http-client03.component.html',
  styleUrl: './http-client03.component.css'
})
export class HttpClient03Component {

  constructor(private http: HttpClient) { }

  postData() {
    const user = {
      id: 102,
      name: 'Paolo',
      email: 'paolo@yahoo.it'
    };
    //console.log('ciao');
    this.http.post('http://localhost:3000/users', user)
      .subscribe((response) => {
        console.log('User updated: ', response);
      })
  }
}
