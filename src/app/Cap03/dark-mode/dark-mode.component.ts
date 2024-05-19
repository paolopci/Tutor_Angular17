import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrl: './dark-mode.component.css'
})
export class DarkModeComponent {

  colorMode = 'lightMode';
  toggleMode() {
    if (this.colorMode === 'lightMode') {
      this.colorMode = 'darkMode';
    } else { 
      this.colorMode='lightMode';
    }
  }
}
