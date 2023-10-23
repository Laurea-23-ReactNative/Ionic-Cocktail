import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MocktailsPage } from './mocktails.page';

const routes: Routes = [
  {
    path: '',
    component: MocktailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MocktailsPageRoutingModule {}
