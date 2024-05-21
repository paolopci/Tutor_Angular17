import { Component, DoCheck, AfterContentInit, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-test04',
  templateUrl: './test04.component.html',
  styleUrl: './test04.component.css'
})
export class Test04Component implements AfterContentInit {

  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;


  ngAfterContentInit(): void {
    console.log('ngAfterContentInit was invoked....');
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - ','contentWrapper', this.content);

  }

}
