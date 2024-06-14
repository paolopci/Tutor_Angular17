import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { response } from 'express';
import { Employee } from '../../../switch/switch.component';
import { url } from 'inspector';


@Component({
  selector: 'app-http-client04',
  templateUrl: './http-client04.component.html',
  styleUrl: './http-client04.component.css'
})
export class HttpClient04Component {
  urlPath: string = 'http://localhost:3000/users/';
  userData?: any = undefined;
  constructor(private http: HttpClient) { }

  putData() {
    const user = {
      id: 102,
      name: 'Giulio_Cesare',
      email: 'g.cesare@gmail.com'
    }

    // put
    this.http.put(this.urlPath + user.id, user)
      .subscribe((response) => {
        console.log(response);
      })
  }

  putData2() {

    // get
    this.userData = this.http.get<any>(this.urlPath + '104').subscribe((updateData) => {
      updateData.name = 'Venerina',
        updateData.Employee = 'venerina.piergiovanni@gmail.com'
      console.log(updateData);

      // put 
      this.http.put(this.urlPath + '104', updateData).subscribe({
        next: (response) => { console.log('User updated: ', response); },
        error: (err) => { console.log(`Error updating the data: ${err}`); }
      });
    });
  }
}
