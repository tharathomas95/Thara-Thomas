import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName',
})
export class SearchNamePipe implements PipeTransform {
  transform(items: any, searchString: string): any {
    if (!items) return [];
    if (!searchString) return items;
    return items.filter((value: any) => {
      return value.toLocaleLowerCase().includes(searchString);
    });
  }
}
