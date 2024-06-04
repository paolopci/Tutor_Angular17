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

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      userDetails: this.formBuilder.group({
        fname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      }),
      additionalDetails: this.formBuilder.group({
        mobile: ['', [Validators.required, Validators.maxLength(10)]],
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
    this.step++;
  }

  formSubmit(){
    console.log(this.myForm.value);
  }

}
