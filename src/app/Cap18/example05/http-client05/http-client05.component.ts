import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-client05',
  templateUrl: './http-client05.component.html',
  styleUrl: './http-client05.component.css'
})
export class HttpClient05Component {
  url: string = 'http://localhost:3000/users/';
  userData: any | undefined;
  userId: string = '';


  constructor(private http: HttpClient) { }


  deleteData() {
    if (!this.userId) {
      alert('Please enter a user id');
      return;
    }

    this.http.delete(this.url + this.userId).subscribe({
      next: () => {
        console.log(`Data deleted successfully...`);
      },
      error: (err) => {
        console.log('Something went wrong: ', err);
      }
    });
  }

  deleteData2() {
    // get
    this.userData = this.http.get<any>(this.url + '104').subscribe({
      next: (res) => {
        console.log('GET user: ', res);

        this.userData = res;
        console.log('userData ', this.userData);

        this.http.delete(this.url + res.id).subscribe({
          next: (result) => {
            console.log(`Utente : ${res.id}, ${res.name} cancellato!!!!`);
          },
          error: (err) => { console.log("Something went wrong :(", err); }
        })

      }
    });
  }

}
