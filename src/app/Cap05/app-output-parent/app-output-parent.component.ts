import { Component } from '@angular/core';
import { user } from './child-output/child-output.component';

@Component({
  selector: 'app-app-output-parent',
  templateUrl: './app-output-parent.component.html',
  styleUrl: './app-output-parent.component.css'
})
export class AppOutputParentComponent {
  message: string = '';
  per: user | undefined;

  receiveChildEvent(eventData: string) {
    this.message = eventData;
  }

  receiveUserChildEvent(per: user) {
    this.per = per;
  }
}
