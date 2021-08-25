import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(listOfComponents: any[], nameToFilter: string): string[] {
    if (!listOfComponents) { return null; }
    if (!nameToFilter) { return listOfComponents; }

    return listOfComponents.filter(n => n.description.indexOf(nameToFilter) >= 0);
  }

}

