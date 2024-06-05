import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-multi-validations',
  templateUrl: './login-multi-validations.component.html',
  styleUrl: './login-multi-validations.component.css'
})
export class LoginMultiValidationsComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[@$!*&])(?!\s).*$/)
      ]]
    });

  }


  formSubmit() {
    if (this.myForm.valid) {
      console.log("Form Submitted");
    }
  }
}
