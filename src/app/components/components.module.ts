import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ModalInfoComponent } from './modal-info/modal-info.component';
import { PopOverInfoComponent } from './pop-over/pop-over-info.component';



@NgModule({
    declarations: [
        HeaderComponent,
        ModalInfoComponent,
        PopOverInfoComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        HeaderComponent,
        ModalInfoComponent,
        PopOverInfoComponent,
    ]
})
export class ComponentsModule { }
