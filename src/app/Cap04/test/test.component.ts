import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnChanges {

  valore: string = '';
  previsionValue: any;
  currentValue: any;
  isFirstChange: any;




  @Input() inputValue: string = '';
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Calling fron onChanges hook ...');
    console.log(changes);


    // come leggere currentValue, previsionValue e firstChange dalla class SimpleChanges
    // Fare un ciclo for come sotto
    for (let propName in changes) {
      let chng = changes[propName];
      this.currentValue = JSON.stringify(chng.currentValue);
      this.previsionValue = JSON.stringify(chng.previousValue);
      this.isFirstChange = JSON.stringify(chng.firstChange)
    }

    
    console.log('current value: ' + this.currentValue);
    console.log('prevision value: ' + this.previsionValue);
    console.log('is First change: ' + this.isFirstChange);
  }
}
