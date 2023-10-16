import { Component } from '@angular/core';

interface ComponentListItem {
    icon: string;
    name: string;
    redirectTo: string;
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    componentsItems: ComponentListItem[] = [
        {
            icon: 'american-football-outline',
            name: 'Action Sheet',
            redirectTo: '/action-sheet',
        },
        {
            icon: 'alert-circle-outline',
            name: 'Alert',
            redirectTo: '/alert',
        },
        {
            icon: 'person-circle-outline',
            name: 'Avatar',
            redirectTo: '/avatar',
        },
    ];
}
