import { AfterViewInit, Component, ElementRef, ViewChild, signal } from '@angular/core';
import { ChildViewChildComponent } from './Cap05/parent-view-child/child-view-child/child-view-child.component';
import { ChildComponent } from './Cap05/input/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  @ViewChild(ChildViewChildComponent) childComponent?: ChildViewChildComponent;
  @ViewChild('btnIncr') btnRef?: ElementRef<HTMLButtonElement>;


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

  incrementChildCounter() {
    console.log(this.childComponent);
    this.childComponent?.incrementCounter();
  }

  ngAfterViewInit(): void {
    if (this.btnRef?.nativeElement) {
      this.btnRef.nativeElement.innerHTML = 'Counter ++';
    }
  }
}


export interface Employee {
  id: number;
  name: string;
  role: string;
}