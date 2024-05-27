import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumbers'
})
export class SortNumbersPipe implements PipeTransform {

  transform(arrayNumbers: number[], sortOrder: 'asc' | 'desc'): number[] {
    if (sortOrder === 'asc') {
      return arrayNumbers.sort();
    } else {
      return arrayNumbers.sort((a, b) => b - a);
    }
  }

}
