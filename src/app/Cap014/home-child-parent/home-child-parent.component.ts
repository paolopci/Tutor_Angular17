import { Component } from '@angular/core';
import { ButtonClickService } from './services/button-click.service';

@Component({
  selector: 'app-home-child-parent',
  templateUrl: './home-child-parent.component.html',
  styleUrl: './home-child-parent.component.css'
})
export class HomeChildParentComponent {

  constructor(private btnService:ButtonClickService){}

  enableRoutes(){
    this.btnService.setButtonClicked();
  }

}
