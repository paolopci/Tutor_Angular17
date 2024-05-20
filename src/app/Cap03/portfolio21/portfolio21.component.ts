import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio21',
  templateUrl: './portfolio21.component.html',
  styleUrl: './portfolio21.component.css'
})
export class Portfolio21Component {
  nm: string = '';
  em: string = '';
  ph: string = '';
  add: string = '';

  qualification = [{ school: '', degree: '', year: '' }];

  showHeading: boolean = true;
  submitted: boolean = false;


  addQualification() {
    this.qualification.push({ school: '', degree: '', year: '' });
  }

  submit() {
    this.submitted = true;
    this.showHeading = false;
  }

  edit() {
    this.submitted = false;
    this.showHeading = true;
  }
}