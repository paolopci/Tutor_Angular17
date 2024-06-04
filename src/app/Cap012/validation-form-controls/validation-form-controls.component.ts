import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-form-controls',
  templateUrl: './validation-form-controls.component.html',
  styleUrl: './validation-form-controls.component.css'
})
export class ValidationFormControlsComponent {
  myForm: FormGroup;
  nameControl: FormControl;
  emailControl: FormControl;

  constructor() {
    this.nameControl = new FormControl('', Validators.required);
    this.emailControl = new FormControl('', [Validators.required, Validators.email]);
    this.myForm = new FormGroup({
      name: this.nameControl,
      email: this.emailControl
    });
  }

  formSubmit() {
    // controllo la validità della mia form
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }else{
      console.log('errore');
    }
  }

}
