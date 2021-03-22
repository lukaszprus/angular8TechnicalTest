import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterProperty', pure: false })
export class FilterPropertyPipe implements PipeTransform {
  transform<T extends { [key: string]: { toString(): string; }; }>(items: T[] | null | undefined, property: keyof T, term: string) {
    return items && items.filter(item => item[property].toString().toLowerCase().includes(term.toLowerCase()));
  }
}
