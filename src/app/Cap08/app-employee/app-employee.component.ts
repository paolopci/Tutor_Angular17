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

  employees = [
    { id: 1, name: 'Paolo' },
    { id: 2, name: 'Gigi' },
    { id: 3, name: 'Lucia' },
    { id: 4, name: 'Morena' },
    { id: 5, name: 'Vanessa' },
  ]

  constructor(private route: ActivatedRoute) {
    const params = this.route.snapshot.params;
    this.id = params['id'];
    this.name = params['name'];
    console.log(`Emp_ID: ${this.id}, Emp_Name: ${this.name}`);

    this.route.queryParams.subscribe((result) => {
      this.id = result['id'];
      this.name = result['name'];
      console.log(result);
    })
  }
}
