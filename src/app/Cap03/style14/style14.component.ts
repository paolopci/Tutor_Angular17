import { Component } from '@angular/core';

@Component({
  selector: 'app-style14',
  templateUrl: './style14.component.html',
  styleUrl: './style14.component.css'
})
export class Style14Component {
  nm: string = '';
  em: string = '';
  emailIsValid: boolean = false;
  formSubmitted: boolean = false;
  isDisabled = true;


  checkEmailValidation(em: string): void {
    if (em.includes('@') && em.includes('.com')) {
      this.emailIsValid = true;
      this.isDisabled = false;
    } else {
      this.emailIsValid = false;
      this.isDisabled = true;
    }
  }

  showMessage() {
      this.formSubmitted = true;
  }
}
