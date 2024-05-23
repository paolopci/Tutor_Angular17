import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]'
})
export class HighlightElementDirective implements OnInit {

  @HostBinding('style.backgroundColor') bgColor?: string;
  @HostBinding('style.fontWeight') fontBold?: string;
  @HostBinding('style.fontStyle') fontItalic?: string;


  ngOnInit(): void {
    this.bgColor = '#f2aa4cff';
    this.fontBold = 'bold';
    this.fontItalic = 'italic';
  }

}
