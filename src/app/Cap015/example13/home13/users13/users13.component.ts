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
  selector: 'app-users13',
  standalone: true,
  imports: [],
  templateUrl: './users13.component.html',
  styleUrl: './users13.component.css'
})
export class Users13Component implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.fetchUsers();
  }
  fetchUsers() {
    this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.users = data;
      });
  }
}
