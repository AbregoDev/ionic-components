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
    {
        path: 'fab',
        loadChildren: () => import('./pages/fab/fab.module').then(m => m.FabPageModule)
    },
    {
        path: 'grid',
        loadChildren: () => import('./pages/grid/grid.module').then(m => m.GridPageModule)
    },
    {
        path: 'infinite-scroll',
        loadChildren: () => import('./pages/infinite-scroll/infinite-scroll.module').then(m => m.InfiniteScrollPageModule)
    },
    {
        path: 'input',
        loadChildren: () => import('./pages/input/input.module').then(m => m.InputPageModule)
    },
    {
        path: 'sliding-item',
        loadChildren: () => import('./pages/sliding-item/sliding-item.module').then(m => m.SlidingItemPageModule)
    },
    {
        path: 'reorder',
        loadChildren: () => import('./pages/reorder/reorder.module').then(m => m.ReorderPageModule)
    },
    {
        path: 'loading',
        loadChildren: () => import('./pages/loading/loading.module').then(m => m.LoadingPageModule)
    },
    {
        path: 'modal',
        loadChildren: () => import('./pages/modal/modal.module').then(m => m.ModalPageModule)
    },
    {
        path: 'pop-over',
        loadChildren: () => import('./pages/pop-over/pop-over.module').then(m => m.PopOverPageModule)
    },
    {
        path: 'progress',
        loadChildren: () => import('./pages/progress/progress.module').then(m => m.ProgressPageModule)
    },
    {
        path: 'refresher',
        loadChildren: () => import('./pages/refresher/refresher.module').then(m => m.RefresherPageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
