import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ContainerComponent } from './container/container.component';
<<<<<<< Updated upstream
import { JobsComponent } from './jobs/jobs.component';
import { JobComponent } from './job/job.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
=======
import { JobComponent } from './job/job.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';


>>>>>>> Stashed changes
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
<<<<<<< Updated upstream
  declarations: [HeaderComponent, ContainerComponent, JobsComponent, JobComponent, JobDetailComponent],
=======
  declarations: [HeaderComponent, ContainerComponent, JobComponent, JobListComponent, JobDetailComponent],
>>>>>>> Stashed changes
  exports: [HeaderComponent, ContainerComponent, NgZorroAntdModule],
})
export class ShareModule { }
