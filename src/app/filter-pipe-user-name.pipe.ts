import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeUserName',
})
export class FilterPipeUserNamePipe implements PipeTransform {
  transform(items: any[], searchText: string): any {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter((it) => {
      return it.UserName.toLowerCase().includes(searchText);
    });
  }
}
