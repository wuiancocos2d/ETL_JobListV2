import {Component, OnInit, Input} from '@angular/core';
import {Job} from '../../core/models/job';
import {JobsService} from '../../core/services/jobs.service';
import {ActivatedRoute} from '@angular/router';
import {isArray} from 'util';

@Component({
  selector: 'app-external-job-detail',
  templateUrl: './external-job-detail.component.html',
  styleUrls: ['./external-job-detail.component.css']
})
export class ExternalJobDetailComponent implements OnInit {
  @Input() job: Job;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobsService
  ) {
  }

  ngOnInit() {
    this.getJobDetail();
  }

  getJobDetail() {
    const jobName = this.route.snapshot.paramMap.get('Job_Name');
    this.jobService.getJob('E', jobName)
      .subscribe(job => {
        if (isArray(job)) {
          this.job = job[0];
        } else {
          this.job = job;
        }
      });
  }
}
