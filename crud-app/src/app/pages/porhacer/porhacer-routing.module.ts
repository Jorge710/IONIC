import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorhacerPage } from './porhacer.page';

const routes: Routes = [
  {
    path: '',
    component: PorhacerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorhacerPageRoutingModule {}
