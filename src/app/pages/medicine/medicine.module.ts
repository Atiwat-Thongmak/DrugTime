import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicinePageRoutingModule } from './medicine-routing.module';

import { MedicinePage } from './medicine.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicinePageRoutingModule,
    TranslateModule
  ],
  declarations: [MedicinePage]
})
export class MedicinePageModule {}
