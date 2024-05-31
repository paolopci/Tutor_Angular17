import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-use-factory-home',
  templateUrl: './use-factory-home.component.html',
  styleUrl: './use-factory-home.component.css'
})
export class UseFactoryHomeComponent {
  msg: string = '';

  constructor(private service: MessageService) {
    console.log( service.msg());
  }

  showmsg() {
    return this.msg = this.service.msg();
  }
}
