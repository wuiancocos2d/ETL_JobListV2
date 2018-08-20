import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Job} from './models/job';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [Job],
})
export class CoreModule {
}
