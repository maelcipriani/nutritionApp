import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'isInFilteredArray'
})
export class IsInFilteredArrayPipe implements PipeTransform {
  transform(array: any[], element: any): boolean {
    if (!array.length) {
      return false;
    }
    return array.filter(e => e.id === element.id).length > 0;
  }
}
