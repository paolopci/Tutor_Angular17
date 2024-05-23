import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-app-pick-color-binding',
  templateUrl: './app-pick-color-binding.component.html',
  styleUrl: './app-pick-color-binding.component.css'
})
export class AppPickColorBindingComponent implements AfterViewInit {

  // used to obtain the reference of the DOM element to perform DOM manipulation
  // è l'elemento del Dom che controllo e associo a @HostBinding
  @ViewChild('colorInput') colorInput!: ElementRef<HTMLInputElement>;

  // selectColor può essere in diversi formati #ff11ac,rgba(30,144,255,1.00) , red
  @HostBinding('style.backgroundColor') selectedColor!: string;

  // event object captures the value when the event occurs.
  @HostListener('input', ['$event.target.value']) onColorChange(color: string) {
    this.selectedColor = color;
  }

  ngAfterViewInit(): void {
      this.selectedColor=this.colorInput.nativeElement.value;
  }
}
