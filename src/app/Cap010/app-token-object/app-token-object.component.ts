import { Component, Inject } from '@angular/core';
import { LogMessage1Service } from '../services/log-message1.service';

@Component({
  selector: 'app-app-token-object',
  templateUrl: './app-token-object.component.html',
  styleUrl: './app-token-object.component.css'
})
export class AppTokenObjectComponent {

  constructor(@Inject('LOG_MSG1') public logger:LogMessage1Service){
    this.logger.log();
  }
}
