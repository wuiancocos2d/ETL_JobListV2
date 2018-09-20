import {Component, OnInit, Input} from '@angular/core';
import {Job} from '../../core/models/job';
import {JobsService} from '../../core/services/jobs.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  @Input() job: Job;
  @Input() jobType: string;
  dateFormat = 'yyyy-MM-dd';
  updateStatus = '';
  updateDate = '';
  errorMessage: string;
  updateDateString = '';

  constructor(
    private jobService: JobsService
  ) {
  }

  ngOnInit() {

  }

  handleDateChange(event): void {
    if (this.updateDate !== null || this.updateDate) {
      const date = new Date(this.updateDate);
      const day = date.getDate().toString();
      const month = (date.getMonth() + 1).toString();
      const year = date.getFullYear().toString();
      this.updateDateString = year + '-' + month + '-' + day;
    } else {
      this.updateDateString = '';
    }
  }

  onSubmit(): void {
    if (!this.updateDateString.length || !this.updateStatus.length || !this.jobType) {
      console.log('this', !this.updateDateString.length , !this.updateStatus.length , this.jobType);
      this.errorMessage = 'Please Fill necessary ';
    } else {
      this.errorMessage = null;
      const postString = this.getPostString();
      this.jobService.updateJobStatus(this.jobType, postString)
        .subscribe(message => {
          console.log(message);
        });
    }
  }

  getPostString() {
    return 'Job_Name=' + this.job.Job_Name + '&Last_Tx_Dt=' + this.updateDateString + '&Last_Job_Status=' + this.updateStatus;
  }
}
