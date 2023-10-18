import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'action-sheet',
        loadChildren: () => import('./pages/action-sheet/action-sheet.module').then(m => m.ActionSheetPageModule)
    },
    {
        path: 'alert',
        loadChildren: () => import('./pages/alert/alert.module').then(m => m.AlertPageModule)
    },
    {
        path: 'avatar',
        loadChildren: () => import('./pages/avatar/avatar.module').then(m => m.AvatarPageModule)
    },
    {
        path: 'button',
        loadChildren: () => import('./pages/button/button.module').then(m => m.ButtonPageModule)
    },
    {
        path: 'card',
        loadChildren: () => import('./pages/card/card.module').then(m => m.CardPageModule)
    },
    {
        path: 'checkbox',
        loadChildren: () => import('./pages/checkbox/checkbox.module').then(m => m.CheckboxPageModule)
    },
    {
        path: 'date-time',
        loadChildren: () => import('./pages/date-time/date-time.module').then(m => m.DateTimePageModule)
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
