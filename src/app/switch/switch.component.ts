import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  title = 'myHoldApp17';

  employeeRole: string = '';


  employees = signal<Employee[]>([
    { id: 1, name: 'EmployeeA', role: 'Admin' },
    { id: 2, name: 'EmployeeB', role: 'HR' },
    { id: 3, name: 'EmployeeC', role: 'Marketing' },
    { id: 4, name: 'EmployeeD', role: 'Developer' },
    { id: 5, name: 'EmployeeE', role: 'Marketing' },
    { id: 6, name: 'EmployeeF', role: 'Analyst' },
    { id: 7, name: 'EmployeeG', role: 'Developer' },
    { id: 8, name: 'EmployeeH', role: 'Analyst' },
    { id: 8, name: 'EmployeeI', role: 'HR' },
  ]);
}


export interface Employee {
  id: number;
  name: string;
  role: string;
}
