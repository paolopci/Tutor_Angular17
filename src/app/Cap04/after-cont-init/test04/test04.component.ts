import { Component, AfterContentInit, ViewChild, ElementRef, ContentChild, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-test04',
  templateUrl: './test04.component.html',
  styleUrl: './test04.component.css'
})
export class Test04Component implements AfterContentInit, AfterContentChecked {
  

  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;


  ngAfterContentInit(): void {
    console.log('ngAfterContentInit was invoked....');
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - ', 'contentWrapper', this.content);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked was invoked....');
  }

}
