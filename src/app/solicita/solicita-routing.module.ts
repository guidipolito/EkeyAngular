import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitaPage } from './solicita.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitaPageRoutingModule {}
