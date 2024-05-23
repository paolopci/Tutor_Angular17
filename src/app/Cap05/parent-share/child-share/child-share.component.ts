import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-share',
  templateUrl: './child-share.component.html',
  styleUrl: './child-share.component.css'
})
export class ChildShareComponent implements OnInit, OnDestroy {

  @Input() items: string[] = [];
  @Output() itemDelete = new EventEmitter<number>();

  ngOnInit(): void {
    console.log('Child Component is initialized');
  }
  ngOnDestroy(): void {
    console.log('Child Component is destroy');
  }

  deleteItem(index: number) {
    this.itemDelete.emit(index);
  }
}
