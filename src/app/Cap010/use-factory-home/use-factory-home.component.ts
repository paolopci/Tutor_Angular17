import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { AppUpdateService } from '../services/app-update.service';

@Component({
  selector: 'app-use-factory-home',
  templateUrl: './use-factory-home.component.html',
  styleUrl: './use-factory-home.component.css'
})
export class UseFactoryHomeComponent {
  msg: string = '';
  message: string = '';

  constructor(private service: MessageService, private appUpdateService: AppUpdateService) {
    console.log(service.msg());
    this.message = appUpdateService.getAppUpdate();
  }

  showmsg() {
    return this.msg = this.service.msg();
  }
}
