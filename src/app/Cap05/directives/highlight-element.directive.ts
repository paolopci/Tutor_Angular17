import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]'
})
export class HighlightElementDirective implements OnInit {

  @HostBinding('style.backgroundColor') bgColor?: string;
  @HostBinding('style.fontWeight') fontBold?: string;
  @HostBinding('style.color') fontColor?: string;

  colorArray = [
    '#e94b3cff',
    '#2d2926ff',
    '#2a3132',
    '#343148ff',
    '#07575b',
    '#021c1e',
    '#2a2f33',
    '#1e1f26'
  ];

  // @HostListener('click') onToggle() {
  //   if (this.bgColor === '#f2aa4cff') {
  //     this.bgColor = '#101820ff';
  //     this.fontColor = '#f2aa4cff';
  //   } else {
  //     this.fontColor = '#101820ff';
  //     this.bgColor = '#f2aa4cff';
  //   }
  // }

  @HostListener('click') onToggle() {
    this.setRandomColor();
  }

  ngOnInit(): void {
    this.bgColor = '#f2aa4cff';
    this.fontBold = 'bold';
    this.fontColor = '#101820ff';
  }

  private setRandomColor() {
    const colorPick = Math.floor(Math.random() * this.colorArray.length);
    if (this.bgColor !== this.colorArray[colorPick]) { // controllo che il colore dello sfondo sia diverso da quello selezonato
      this.bgColor = this.colorArray[colorPick];       // nell'array
      this.fontColor = '#ccc';
    } else {
      // nel caso che il colore dello sfondo sia uguale a quello scelto nel array
      this.setRandomColor();
    }
  }

}

