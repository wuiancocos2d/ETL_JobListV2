import {Component, OnInit} from '@angular/core';
import {JobsService} from '../core/services/jobs.service';
import {Job} from '../core/models/job';

@Component({
  selector: 'app-etl-job-list',
  templateUrl: './etl-job-list.component.html',
  styleUrls: ['./etl-job-list.component.css']
})
export class EtlJobListComponent implements OnInit {

  jobs: Job[];

  constructor(
    private jobsService: JobsService
  ) {
  }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this.jobsService.getJobs('E').subscribe(jobs => this.jobs = jobs);
  }
}
