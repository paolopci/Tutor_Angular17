import { Component, Inject } from '@angular/core';
import { LogMessage1Service } from '../services/log-message1.service';

@Component({
  selector: 'app-comp-token',
  templateUrl: './app-comp-token.component.html',
  styleUrl: './app-comp-token.component.css'
})
export class AppCompTokenComponent {
  constructor(@Inject('LOG_MSG1') public logger:LogMessage1Service){
    this.logger.log();
  }

}
