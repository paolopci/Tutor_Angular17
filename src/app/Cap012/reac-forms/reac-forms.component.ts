import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reac-forms',
  templateUrl: './reac-forms.component.html',
  styleUrl: './reac-forms.component.css'
})
export class ReacFormsComponent {

  usernameControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
    Validators.minLength(3),
    Validators.pattern('^[a-zA-Z0-9]+$')
  ]);

  showValue() {
    console.log(`Value: ${this.usernameControl.value}`);
    console.log(`Validation status: ${this.usernameControl.valid}`);
    console.log(`Validation status: ${this.usernameControl.errors}`);
    console.log(this.usernameControl.errors);
  }

}
