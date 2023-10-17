import { Component } from '@angular/core';

interface CheckboxData {
    name: string;
    selected: boolean;
}

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.page.html',
})
export class CheckboxPage {

    data: CheckboxData[] = [
        {
            name: 'primary',
            selected: false,
        },
        {
            name: 'secondary',
            selected: true,
        },
        {
            name: 'tertiary',
            selected: false,
        },
        {
            name: 'success',
            selected: true,
        },
    ];

    get values(): any {
        return this.data.map(i => i.selected);
    }

    onClick(item: any) {
        console.log(item);
    }
}
