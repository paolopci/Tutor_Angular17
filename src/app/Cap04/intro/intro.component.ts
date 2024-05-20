import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent implements OnInit{
 constructor(){
  console.log('calling from constructor ....')

  
 }
  ngOnInit(): void {
    console.log('calling from OnInit ....')
  }
}
