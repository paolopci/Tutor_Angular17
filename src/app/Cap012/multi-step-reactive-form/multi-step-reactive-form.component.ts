import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-step-reactive-form',
  templateUrl: './multi-step-reactive-form.component.html',
  styleUrl: './multi-step-reactive-form.component.css'
})
export class MultiStepReactiveFormComponent {
  step: number = 1;




  btnPrevious() {
    this.step--;
   }

  btnNext() {
    this.step++;
   }

}
