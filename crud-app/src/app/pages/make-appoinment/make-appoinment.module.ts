import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule} from '@angular/forms';//

import { IonicModule } from '@ionic/angular';

import { MakeAppoinmentPageRoutingModule } from './make-appoinment-routing.module';

import { MakeAppoinmentPage } from './make-appoinment.page';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    MakeAppoinmentPageRoutingModule
  ],
  declarations: [MakeAppoinmentPage]
})
export class MakeAppoinmentPageModule {}
