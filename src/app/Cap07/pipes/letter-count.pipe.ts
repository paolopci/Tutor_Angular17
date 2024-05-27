import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterCount'
})
export class LetterCountPipe implements PipeTransform {

  transform(value: string): number {
    let count: number = 0;
    for (let ch of value) {
      // controllo se il carattere della strina è una lettera se si incremento il contatore!!
      // potevi usare usa Regex pattern
      // if(/[]a-zA-Z/.test(char)){ count++}
      if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z') {
        count++;
      }
    }

    return count;
  }

}
