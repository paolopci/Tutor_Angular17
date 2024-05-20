import { Component } from '@angular/core';
import { app } from '../../../../server';

@Component({
  selector: 'app-style13',
  templateUrl: './style13.component.html',
  styleUrl: './style13.component.css'
})
export class Style13Component {
  colorVal = 'navy';
  fontSize = '30px';
  isItalic = 'italic';

  // creo un object per passare le properties
  applyVal = {
    'color': 'darkgreen',
    'font-style': 'italic',
    'font-size': '35px',
    'font-weight': 'bold'
  };

  setColor(): string {
    return 'red';
  }
}
