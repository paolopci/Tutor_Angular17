import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { urlValidator } from '../customer-validators/url-validator';

@Component({
  selector: 'app-custom-url-validator',
  templateUrl: './custom-url-validator.component.html',
  styleUrl: './custom-url-validator.component.css'
})
export class CustomUrlValidatorComponent {
  validateURL: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateURL = this.fb.group({
      checkURL: ['', [Validators.required, urlValidator]]
    });
  }
  validate() {
    if (!this.validateURL.valid) {
      alert("Please enter correct URL");
      return false;
    } else {
      return alert("URL is valid");
    }
  }
}
