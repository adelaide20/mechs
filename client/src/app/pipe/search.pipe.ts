import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(mechanics: any[], searchText: string): any[] {
    if (!mechanics || !searchText) {
      return mechanics;
    }

    searchText = searchText.toLowerCase();

    return mechanics.filter(mechanic => {
      const location = mechanic.location?.toLowerCase()?.includes(searchText);
      const full_name = mechanic.full_name?.toLowerCase()?.includes(searchText);


      return location + full_name;
    });
  }


}
