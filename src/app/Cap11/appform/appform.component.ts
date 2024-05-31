import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-appform',
  templateUrl: './appform.component.html',
  styleUrl: './appform.component.css'
})
export class AppformComponent {
  user: { username : string } = { username: '' };

  submitForm(myForm: NgForm) {
    if (myForm.valid) {
      alert("Submitted successfully, check console.");
      console.log(this.user);
    }
  }
}
