import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements DoCheck {


  @Input() msg: string = '';
  @Input() showData: { id: number; name: string }[] = []; // deve avere lo 
                                                          // stesso formato della properties che hai in parent component

  ngDoCheck(): void {
    console.log('message from parent is :' + this.msg)
  }


}
