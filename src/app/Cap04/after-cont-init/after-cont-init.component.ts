import { Component, AfterContentInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-after-cont-init',
  templateUrl: './after-cont-init.component.html',
  styleUrl: './after-cont-init.component.css'
})
export class AfterContInitComponent implements DoCheck {

  dataFromParents = '';
  displayComponent: boolean = true;

  ngDoCheck(): void {
    console.log("ngDoCheck was invoked...");
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit was invoked...');
  }

  sendDataChild(): void {
    let random = Math.floor(Math.random() * 10);
    this.dataFromParents = "Random Number: " + random;
  }

  toogle(){
    this.displayComponent=!this.displayComponent;
  }
}
