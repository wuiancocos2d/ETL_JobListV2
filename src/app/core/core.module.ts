import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Job} from './models/job';

import {HttpClient, HttpHeaders} from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    HttpClient,
    HttpHeaders,
  ],
  declarations: [],
  exports: [Job],
})
export class CoreModule {
}
