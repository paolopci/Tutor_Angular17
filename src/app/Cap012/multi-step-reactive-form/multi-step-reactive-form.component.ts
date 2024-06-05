import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-step-reactive-form',
  templateUrl: './multi-step-reactive-form.component.html',
  styleUrl: './multi-step-reactive-form.component.css'
})
export class MultiStepReactiveFormComponent {
  step: number = 1;
  myForm: FormGroup;
  isSubmitted: boolean = false;


  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      userDetails: this.formBuilder.group({
        fname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      }),
      additionalDetails: this.formBuilder.group({
        mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        address: ['', Validators.required],
        country: ['', Validators.required],
        gender: ['', Validators.required]
      }),
      feedback: this.formBuilder.group({
        comments: [''],
      })
    });
  }



  btnPrevious() {
    this.step--;
  }

  btnNext() {
    const userDetailsGroup = this.myForm.get('userDetails') as FormGroup;
    const additionalDetailsGroup = this.myForm.get('additionalDetails') as FormGroup;
    if (userDetailsGroup.invalid && this.step == 1) {
      return;
    }
    if (additionalDetailsGroup.invalid && this.step == 2) {
      return;
    }
    this.step++;
  }

  formSubmit() {
    if (this.myForm.valid) {
      this.isSubmitted = true;
    }
    console.log(this.myForm.value);
  }

  get userDetails() {
    return this.myForm.get('userDetails') as FormGroup;
  }
  get additionalDetails() {
    return this.myForm.get('additionalDetails') as FormGroup;
  }

}
