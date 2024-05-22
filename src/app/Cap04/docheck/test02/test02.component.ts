import { Component, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-test02',
  templateUrl: './test02.component.html',
  styleUrl: './test02.component.css'
})
export class Test02Component implements  DoCheck {
  private previousUserName: string | undefined;

  @Input() user: any;  // xchè è un object

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOn  Changes called: ', changes);
  // }

  ngDoCheck(): void {
    if (this.user.name != this.previousUserName) {
      this.previousUserName = this.user.name;
      console.log('ngDoCheck called - User name change: ',this.user.name);
    }
  }

}
