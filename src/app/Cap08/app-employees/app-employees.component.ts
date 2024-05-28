import { Component } from '@angular/core';

@Component({
  selector: 'app-app-employees',
  templateUrl: './app-employees.component.html',
  styleUrl: './app-employees.component.css'
})
export class AppEmployeesComponent {

  employees = [
    { empId: 101, empName: 'Joe', empDept: 'General Mgmt Dept' },
    { empId: 102, empName: 'Alex', empDept: 'Marketing Dept' },
    { empId: 103, empName: 'Nathan', empDept: 'HR Dept' },
    { empId: 104, empName: 'Siya', empDept: 'Sales Dept' },
  ]
}
