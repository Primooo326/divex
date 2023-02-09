import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsambleaPageRoutingModule } from './asamblea-routing.module';

import { AsambleaPage } from './asamblea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsambleaPageRoutingModule
  ],
  declarations: [AsambleaPage]
})
export class AsambleaPageModule {}
