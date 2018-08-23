import {Component, OnInit} from '@angular/core';
import {JobsService} from '../../core/services/jobs.service';
import {Job} from '../../core/models/job';

@Component({
  selector: 'app-external-job-list',
  templateUrl: './external-job-list.component.html',
  styleUrls: ['./external-job-list.component.css']
})
export class ExternalJobListComponent implements OnInit {
  jobs: Job[];

  constructor(
    private jobService: JobsService
  ) {
  }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this.jobService.getJobs('E').subscribe(jobs => this.jobs = jobs);
  }
}

