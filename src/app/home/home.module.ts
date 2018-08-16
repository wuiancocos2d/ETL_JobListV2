import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { ShareModule } from '../share/share.module';
import { SelectPanelsComponent } from './components/select-panels/select-panels.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule,
  ],
  declarations: [HomeComponent, SelectPanelsComponent]
})
export class HomeModule { }
