import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
NgForm

@Component({
  selector: 'app-app-submit',
  templateUrl: './app-submit.component.html',
  styleUrl: './app-submit.component.css'
})
export class AppSubmitComponent {

  formSubmit(myForm: NgForm) {
    if (myForm.valid) {
      const formValues = JSON.stringify(myForm.value);
      console.log(formValues);
      console.log('%c Form submitted successfully', 'color:green; font-weight: 400; font-size: 25px;');
    } else {
      console.log('%c Please fill up the required fields', 'color:white ;background-color:black; font-weight: 400; font-size: 25px;');
    }
  }

  resetValue(myForm: NgForm) {
    // metodo fornito da NgForm class e resetto la form allo stato iniziale.
    myForm.resetForm();
  }

  setDefaultValue(myForm: NgForm) {
    myForm.resetForm({
      name: 'Paolo Paci',
      email: 'paolopci@yahoo.it'
    });
  }
}
