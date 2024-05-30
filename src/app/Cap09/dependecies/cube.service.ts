import { Injectable } from '@angular/core';
import { PowerService } from './power.service';

@Injectable()
export class CubeService {

  constructor(public powerService: PowerService) {
  }

  calculateCube(value:number):number{
    // calcolo il cubo di numero usando il metodo offerto dal 
    // servizio PowerService che è stato registrato a livello
    // di component.
    return this.powerService.calculatePower(value,3);
  }
}
