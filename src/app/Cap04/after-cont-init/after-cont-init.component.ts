import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-after-cont-init',
  templateUrl: './after-cont-init.component.html',
  styleUrl: './after-cont-init.component.css'
})
export class AfterContInitComponent implements AfterContentInit {

  dataFromParents = '';


  ngAfterContentInit(): void {
    console.log('ngAfterContentInit was invoked...');
  }

  sendDataChild(): void {
    let random = Math.floor(Math.random() * 10);
    this.dataFromParents = "Random Number: " + random;
  }
}
