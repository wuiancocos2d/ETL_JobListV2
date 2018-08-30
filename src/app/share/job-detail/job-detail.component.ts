import {Component, OnInit, Input} from '@angular/core';
import {Job} from '../../core/models/job';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  @Input() job: Job;
  dateFormat = 'yyyy-MM-dd';
  updateStatus = '';
  updateDate = '';
  errorMessage: string;
  updateDateString = '';

  constructor() {
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
    if (!this.updateDateString.length || !this.updateStatus.length) {
      this.errorMessage = 'Please Fill necessary ';
    } else {
      this.errorMessage = null;
    }

  }

}
