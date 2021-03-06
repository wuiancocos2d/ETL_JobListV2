import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'prepare_job_list',
    loadChildren: './prepare-job-list/prepare-job-list.module#PrepareJobListModule'
  },
  {
    path: 'etl-job-list',
    loadChildren: './etl-job-list/etl-job-list.module#EtlJobListModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
