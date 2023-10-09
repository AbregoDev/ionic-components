import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ActionSheetPage } from './action-sheet.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([{ path: '', component: ActionSheetPage }]),
    ],
    declarations: [ActionSheetPage]
})
export class ActionSheetPageModule { }
