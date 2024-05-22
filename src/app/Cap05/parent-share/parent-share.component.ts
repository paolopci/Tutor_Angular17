import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-share',
  templateUrl: './parent-share.component.html',
  styleUrl: './parent-share.component.css'
})
export class ParentShareComponent implements OnInit {

  itemsArr: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    const newItem = `Item ${this.itemsArr.length + 1}`;
    this.itemsArr.push(newItem);
  }

  deleteItem(index: number) {
    if (index >= 0 && index < this.itemsArr.length) {
      this.itemsArr.splice(index, 1);
    }
  }

  ngOnInit(): void {
      console.log('App Component is initialized');
  }
}
