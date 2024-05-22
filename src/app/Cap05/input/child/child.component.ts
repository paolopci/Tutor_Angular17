import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements DoCheck {
 

  @Input() msg: string ='';

  ngDoCheck(): void {
    console.log('message from parent is :'+this.msg)
  }

  
}
