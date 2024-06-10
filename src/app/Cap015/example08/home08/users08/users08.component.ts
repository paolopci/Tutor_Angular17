import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
}



@Component({
  selector: 'app-users08',
  standalone: true,
  imports: [],
  templateUrl: './users08.component.html',
  styleUrl: './users08.component.css'
})
export class Users08Component implements OnInit {
  users: User[] = [];
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      this.users = data;
    })
  }
}
