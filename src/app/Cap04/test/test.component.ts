import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnChanges {

  valore: string = '';
  previsionValue: string | undefined;
  currentValue: string | undefined;
  isFirstChange: boolean | undefined;

  @Input() inputVal: string = '';


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputValue']) {  // permette di tenere traccia di ogni cambiamento in inputValue property nel component parent.
      this.previsionValue = changes['inputValue'].previousValue;
      this.currentValue = changes['inputValue'].currentValue;
      this.isFirstChange = changes['inputValue'].firstChange;
    }

    console.log(changes);
  }
}
