import { Component } from '@angular/core';

@Component({
  selector: 'app-app-poundtokg-convert',
  templateUrl: './app-poundtokg-convert.component.html',
  styleUrl: './app-poundtokg-convert.component.css'
})
export class AppPoundtokgConvertComponent {

  weightInPounds: number = 0;
  weightInKilograms: number = 0;

  convertWeight() {
    this.weightInKilograms = this.weightInPounds * 0.453592; // 1lbs=0.453592 kg
  }
}
