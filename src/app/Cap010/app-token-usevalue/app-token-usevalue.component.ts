import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-app-token-usevalue',
  templateUrl: './app-token-usevalue.component.html',
  styleUrl: './app-token-usevalue.component.css'
})
export class AppTokenUsevalueComponent {
  constructor(@Inject('STR_MSG') public message: string) { }

}
