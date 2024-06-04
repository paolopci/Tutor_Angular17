import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent {

  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      employees: this.fb.array([])
    })
  }

  submitForm() {
    console.log(this.employeeForm.value);
  }

  addEmployee() {
    const employeeGroup = this.fb.group({
      name: [''],
      job: ['']
    });
    this.employees.push(employeeGroup);
  }

  get employees(): FormArray {
    return this.employeeForm.get('employees') as FormArray;
  }

}
