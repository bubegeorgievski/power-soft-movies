import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
 }

}
