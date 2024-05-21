import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-test04',
  templateUrl: './test04.component.html',
  styleUrl: './test04.component.css'
})
export class Test04Component implements DoCheck {


  ngDoCheck(): void {
    console.log('ngDoCheck was invoked ...');
  }

}
