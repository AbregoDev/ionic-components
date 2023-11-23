import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: any[], textSearch: string, property: string = 'title'): any[] {
        if (!textSearch || !value) return value;

        const lowerCaseTextSearch = textSearch.toLowerCase();

        const filteredValues = value
            .filter(e => e[property].toLowerCase().includes(lowerCaseTextSearch));
        return filteredValues;
    }
}
