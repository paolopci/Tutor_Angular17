import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-factory-ususe-value',
  templateUrl: './factory-ususe-value.component.html',
  styleUrl: './factory-ususe-value.component.css'
})
export class FactoryUsuseValueComponent {

  constructor(
    @Inject('GREETING_MESSAGE_FACTORY')
    public factoryMsg: string,
    @Inject('GREETING_MESSAGE_VALUE')
    public useValueMsg: string) {
    console.log('useFactory Message: ', factoryMsg);
    console.log('useValue Message: ', useValueMsg);
  }
}
