import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExternalJobListComponent} from './external-job-list/external-job-list.component';
import {EtlJobListComponent} from './etl-job-list.component';
import {InternalJobListComponent} from './internal-job-list/internal-job-list.component';
import {ExternalJobDetailComponent} from './external-job-detail/external-job-detail.component';
import {InternalJobDetailComponent} from './internal-job-detail/internal-job-detail.component';

const routes: Routes = [
  {
    path: 'external',
    component: ExternalJobListComponent
  },
  {
    path: 'internal',
    component: InternalJobListComponent
  },
  {
    path: 'external/:Job_Name',
    component: ExternalJobDetailComponent
  },
  {
    path: 'internal/:Job_Name',
    component: InternalJobDetailComponent
  },
  {
    path: '',
    component: EtlJobListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtlJobListRoutingModule {
}
