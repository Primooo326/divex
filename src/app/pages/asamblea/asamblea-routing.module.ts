import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsambleaPage } from './asamblea.page';

const routes: Routes = [
  {
    path: '',
    component: AsambleaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsambleaPageRoutingModule {}
