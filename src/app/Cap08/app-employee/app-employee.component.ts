import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-app-employee',
  templateUrl: './app-employee.component.html',
  styleUrl: './app-employee.component.css'
})
export class AppEmployeeComponent {
  id: string = '';
  name: string = '';

  constructor(private route: ActivatedRoute) {
    const params = this.route.snapshot.params;
    this.id = params['id'];
    this.name = params['name'];
    console.log(`Emp_ID: ${this.id}, Emp_Name: ${this.name}`);
  }
}
