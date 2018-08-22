import {Component, OnInit} from '@angular/core';
import {JobsService} from '../core/services/jobs.service';

@Component({
  selector: 'app-etl-job-list',
  templateUrl: './etl-job-list.component.html',
  styleUrls: ['./etl-job-list.component.css']
})
export class EtlJobListComponent implements OnInit {

  constructor(
    private jobsService: JobsService
  ) {
  }

  ngOnInit() {
  }

  getJobs(): void {
    this.jobsService.getJobs('E');
  }
}
