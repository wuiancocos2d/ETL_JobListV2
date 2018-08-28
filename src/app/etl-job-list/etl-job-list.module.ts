import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EtlJobListRoutingModule} from './etl-job-list-routing.module';
import {ExternalJobListComponent} from './external-job-list/external-job-list.component';
import {EtlJobListComponent} from './etl-job-list.component';
import {ShareModule} from '../share/share.module';
import { InternalJobListComponent } from './internal-job-list/internal-job-list.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    EtlJobListRoutingModule
  ],
  declarations: [ExternalJobListComponent, EtlJobListComponent, InternalJobListComponent]
})
export class EtlJobListModule {
}
