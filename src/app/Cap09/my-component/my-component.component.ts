/*


   Esempio di come Iniettare un servizio dentro un altro Servizio.




*/

import { Component } from '@angular/core';
import { CubeService } from '../dependecies/cube.service';
import { PowerService } from '../dependecies/power.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  providers: [CubeService, PowerService]  // anche se uso solo CubeSrvice devo mettere anche dipendecies di CubeService
})                                        // quindi anche PowerService.
export class MyComponentComponent {

  constructor(public cubeService: CubeService) { }

  calculateCubeFn(): number {
    return this.cubeService.calculateCube(5);
  }
}