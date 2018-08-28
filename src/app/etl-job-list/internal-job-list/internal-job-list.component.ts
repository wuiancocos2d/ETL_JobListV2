import { Component, OnInit } from '@angular/core';
import {JobsService} from '../../core/services/jobs.service';
import {Job} from '../../core/models/job';

@Component({
  selector: 'app-internal-job-list',
  templateUrl: './internal-job-list.component.html',
  styleUrls: ['./internal-job-list.component.css']
})
export class InternalJobListComponent implements OnInit {
  jobs: Job[];
  typeSelectValues = [
    {text: 'ABA', value: 'ABA'},
    {text: 'EXT', value: 'EXT'},
    {text: 'FFP', value: 'FFP'},
    {text: 'OMI', value: 'OMI'},
    {text: 'REF', value: 'REF'},
  ];
  typeName = 'Data_Category_Folder';
  constructor(
    private jobService: JobsService
  ) { }

  ngOnInit() {
    this.getJobs();
  }
  getJobs() {
    this.jobService.getJobs('I').subscribe(jobs => this.jobs = jobs);
  }
}
