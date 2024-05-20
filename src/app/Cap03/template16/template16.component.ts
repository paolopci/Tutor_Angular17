import { Component } from '@angular/core';

@Component({
  selector: 'app-template16',
  templateUrl: './template16.component.html',
  styleUrl: './template16.component.css'
})
export class Template16Component {
  isAuthorized: boolean = false;
  notItems: boolean = false;

  items = ['Paolo', 'Gigi', 'Franco', 'Cesare', 'Silvia'];
}
