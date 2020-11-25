import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FazChavePageRoutingModule } from './faz-chave-routing.module';

import { FazChavePage } from './faz-chave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FazChavePageRoutingModule
  ],
  declarations: [FazChavePage]
})
export class FazChavePageModule {}
