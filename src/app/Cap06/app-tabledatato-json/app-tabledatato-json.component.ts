import { Component } from '@angular/core';

@Component({
  selector: 'app-app-tabledatato-json',
  templateUrl: './app-tabledatato-json.component.html',
  styleUrl: './app-tabledatato-json.component.css'
})
export class AppTabledatatoJsonComponent {
  students = [
    { name: 'alice', age: 21, gender: 'female', major: 'computer science' },
    { name: 'andrew', age: 23, gender: 'male', major: 'electrical engineering' },
    { name: 'charlie', age: 20, gender: 'male', major: 'sociology' },
    { name: 'sarah', age: 25, gender: 'female', major: 'biomedical science' },
  ];

  showJson: boolean = false;

  toggleJson() {
    this.showJson = !this.showJson;
  }
}
