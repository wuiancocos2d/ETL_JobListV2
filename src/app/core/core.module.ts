import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Job} from './models/job';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/mock.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClient,
    HttpHeaders,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )

  ],
  declarations: [],
  exports: [Job],
})
export class CoreModule {
}
