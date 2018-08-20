import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ContainerComponent } from './container/container.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobComponent } from './job/job.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  declarations: [HeaderComponent, ContainerComponent, JobsComponent, JobComponent, JobDetailComponent],
  exports: [HeaderComponent, ContainerComponent, NgZorroAntdModule],
})
export class ShareModule { }