import { Component } from '@angular/core';

@Component({
  selector: 'app-app-sort-number',
  templateUrl: './app-sort-number.component.html',
  styleUrl: './app-sort-number.component.css'
})
export class AppSortNumberComponent {
  numbers: number[] = [2, 45, 1, 4, 67, 22, 7];
  sortOrder = 'asc';
  showList: boolean = false;

  get sortedNumbers() {
    const sortedArr = [...this.numbers].sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a - b;
      } else {
        return b - a;
      }
    });
    return sortedArr;
  }

  showSorting() {
    this.showList = true;
  }
}
