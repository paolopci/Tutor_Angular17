import { Component } from '@angular/core';

@Component({
  selector: 'app-app-json-pipe',
  template: `
  <h1>User Information</h1>
  <h4>Without JSON</h4>
  <p>{{userDetails}}</p>
  <h4>With JSON</h4>
  <p>{{userDetails | json | uppercase}}</p>
`,
  styleUrl: './app-json-pipe.component.css'
})
export class AppJsonPipeComponent {

  userDetails = {
    name: 'Dev',
    email: 'Dev@example.com',
    address: {
      street: '23 Main St',
      city: 'las vegas',
      state: 'nevada',
      zip: 88901,
    }
  };
}
