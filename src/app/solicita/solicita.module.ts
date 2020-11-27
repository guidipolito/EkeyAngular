import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitaPageRoutingModule } from './solicita-routing.module';

import { SolicitaPage } from './solicita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitaPageRoutingModule
  ],
  declarations: [SolicitaPage]
})
export class SolicitaPageModule {}
