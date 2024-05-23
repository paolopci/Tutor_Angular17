import { Component } from '@angular/core';

@Component({
  selector: 'app-app-slide-pipe',
  templateUrl: './app-slide-pipe.component.html',
  styleUrl: './app-slide-pipe.component.css'
})
export class AppSlidePipeComponent {

textString= "Paolo Paci Via del Canarino 5 - 61122 Pesaro";
  sliceArr = ['ItemA', 'ItemB', 'ItemC', 'ItemD'];
}
