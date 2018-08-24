import {Component, OnInit, Input} from '@angular/core';
import {Job} from '../../core/models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  @Input() jobs: Job[];
<<<<<<< Updated upstream
=======
  @Input() urlPrefix: string;
>>>>>>> Stashed changes
  displayData: Job[] = this.jobs;
  searchStatus = [];
  filterStatusList = [
    {text: 'Ready', value: 'Ready'},
    {text: 'Running', value: 'Running'},
    {text: 'Not Received', value: 'Not_Received'},
    {text: 'Done', value: 'Done'},
    {text: 'Error', value: 'Error'}
  ];

  constructor() {
  }

  ngOnInit() {
    if (this.jobs.length > 0) {
      this.displayData = this.jobs;
    }
  }

  filterStatusChange(value: string[]): void {
    this.searchStatus = value;
    this.search();
  }

  search(): void {
    const filterFunc = (item) => {
<<<<<<< Updated upstream
      return (this.searchStatus.length ? this.searchStatus.some(statu => item.Last_Job_Status.indexOf(statu) !== -1) : true);
=======
      return (this.searchStatus.length ? this.searchStatus
        .some(statu => item.Last_Job_Status.indexOf(statu) !== -1) : true);
>>>>>>> Stashed changes
    };
    const data = this.jobs.filter(item => filterFunc(item));
    this.displayData = data;
  }
}
