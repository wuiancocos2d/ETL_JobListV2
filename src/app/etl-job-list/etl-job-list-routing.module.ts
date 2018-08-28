import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExternalJobListComponent} from './external-job-list/external-job-list.component';
import {EtlJobListComponent} from './etl-job-list.component';
import {InternalJobListComponent} from './internal-job-list/internal-job-list.component';

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
