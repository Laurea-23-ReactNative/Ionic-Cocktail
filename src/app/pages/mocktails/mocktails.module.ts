import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MocktailsPageRoutingModule } from './mocktails-routing.module';

import { MocktailsPage } from './mocktails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MocktailsPageRoutingModule
  ],
  declarations: [MocktailsPage]
})
export class MocktailsPageModule {}
