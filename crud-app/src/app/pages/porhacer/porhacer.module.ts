import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorhacerPageRoutingModule } from './porhacer-routing.module';

import { PorhacerPage } from './porhacer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorhacerPageRoutingModule
  ],
  declarations: [PorhacerPage]
})
export class PorhacerPageModule {}
