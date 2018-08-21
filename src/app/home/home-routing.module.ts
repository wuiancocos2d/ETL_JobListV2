import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {EtlJobListModule} from '../etl-job-list/etl-job-list.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'etl-job-list', redirectTo: '../etl-job-list/etl-job-list.module#EtlJobListModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
