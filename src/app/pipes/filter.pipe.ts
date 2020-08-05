import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nameFilterPipe' })
export class NameFilterPipe implements PipeTransform {
  transform(items: any[], nameFilter: string): any[] {
    if (!items) {
      return [];
    }
    if (!nameFilter) {
      return items;
    }
    nameFilter = nameFilter.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(nameFilter);
    });
  }
}

@Pipe({ name: 'idFilterPipe' })
export class IdFilterPipe implements PipeTransform {
  transform(items: any[], idFilter: string): any[] {
    if (!items) {
      return [];
    }
    if (!idFilter) {
      return items;
    }
    idFilter = idFilter.toLocaleLowerCase();

    return items.filter(it => {
      return it.id.toLocaleLowerCase().includes(idFilter);
    });
  }
}

@Pipe({ name: 'typeFilterPipe' })
export class TypeFilterPipe implements PipeTransform {
  transform(items: any[], typeFilter: string): any[] {
    if (!items) {
      return [];
    }
    if (!typeFilter) {
      return items;
    }

    return items.filter(it => {
      return it.type.includes(typeFilter);
    });
  }
}
