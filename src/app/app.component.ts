import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myHoldApp17';

  hasText: boolean = false;


  textInput(e: any) {  
    (e.target.value).length > 3 ? this.hasText = true : this.hasText = false
  }
}