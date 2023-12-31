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
        {
            icon: 'radio-button-on-outline',
            name: 'Button',
            redirectTo: '/button',
        },
        {
            icon: 'card-outline',
            name: 'Card',
            redirectTo: '/card',
        },
        {
            icon: 'checkmark-circle-outline',
            name: 'Checkbox',
            redirectTo: '/checkbox',
        },
        {
            icon: 'calendar-outline',
            name: 'Datetime',
            redirectTo: '/date-time',
        },
        {
            icon: 'add-circle-outline',
            name: 'Fab',
            redirectTo: '/fab',
        },
        {
            icon: 'grid-outline',
            name: 'Grid',
            redirectTo: '/grid',
        },
        {
            icon: 'infinite-outline',
            name: 'Infinite scroll',
            redirectTo: '/infinite-scroll',
        },
        {
            icon: 'create-outline',
            name: 'Input',
            redirectTo: '/input',
        },
        {
            icon: 'list-outline',
            name: 'Sliding Item',
            redirectTo: '/sliding-item',
        },
        {
            icon: 'reorder-three-outline',
            name: 'Reorder',
            redirectTo: '/reorder',
        },
        {
            icon: 'refresh-circle-outline',
            name: 'Loading',
            redirectTo: '/loading',
        },
    ];
}
