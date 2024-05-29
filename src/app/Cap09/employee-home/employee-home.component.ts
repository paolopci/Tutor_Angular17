import { Component } from '@angular/core';
import { EmployeeService } from '../dependecies/employee.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrl: './employee-home.component.css'
})
export class EmployeeHomeComponent {
  employees: any[];
  empId: number = 0;
  emp: any;

  constructor(private e: EmployeeService) {
    this.employees = e.getEmployees();
  }

  showDetails(employeeId: number) {
    this.empId = employeeId;
    this.emp = this.e.getEmployeeById(employeeId);
  }

}
