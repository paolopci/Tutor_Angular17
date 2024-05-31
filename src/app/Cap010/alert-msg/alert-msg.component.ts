import { Component } from '@angular/core';
import { AlertMessage1Service } from '../services/alert-message1.service';
import { AlertMessage2Service } from '../services/alert-message2.service';

@Component({
  selector: 'app-alert-msg',
  templateUrl: './alert-msg.component.html',
  styleUrl: './alert-msg.component.css'
})
export class AlertMsgComponent {

  constructor(private alert: AlertMessage1Service, private alert2: AlertMessage2Service) { }
  displayAlert() {
    this.alert.showAlert();
   // this.alert2.showAlert();
  }

}
