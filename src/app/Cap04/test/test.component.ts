import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnChanges {

  valore: string = '';
  @Input() inputValue: string = '';
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Calling fron onChanges hook ...');
    console.log(changes);
  }

}
