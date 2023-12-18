import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([{ path: '', component: TabsPage }]),
        ComponentsModule,
    ],
    declarations: [TabsPage]
})
export class TabsPageModule { }
