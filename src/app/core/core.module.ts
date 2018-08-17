import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Job} from './models/job';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [Job],
})
export class CoreModule {
}
