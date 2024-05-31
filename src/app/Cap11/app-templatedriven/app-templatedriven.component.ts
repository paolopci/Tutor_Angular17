import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './app-templatedriven.component.html',
  styleUrl: './app-templatedriven.component.css'
})
export class AppTemplatedrivenComponent {
  user: string = '';
  email: string = '';
  selectedCountry: string = '';
  city: string = '';

  countries = [
    { name: 'USA', value: 'usa' },
    { name: 'Canada', value: 'canada' },
    { name: 'UK', value: 'uk' },
  ]

  cities: { [key: string]: string[] } = {
    usa: ['New York', 'Los Angeles', 'Chicago'],
    canada: ['Toronto', 'Vancouver', 'Montreal'],
    uk: ['London', 'Manchester', 'Birmingham'],
  }

  getCitiesByCountry(selectCountry: string): string[] {
    return this.cities[selectCountry] || [];
  }

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      const formData = {
        user: this.user,
        email: this.email,
        country: this.selectedCountry,
        city: this.city
      };
      console.log('Form Submitted', formData);
    }else{
      console.log('Please fill up the fields');
    }
  }
}
