import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToMonth'
})
export class NumToMonthPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][parseInt(value) - 1];
  }

}
