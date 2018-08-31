import {Component, OnInit, Input} from '@angular/core';
import {Job} from '../../core/models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  @Input() jobs: Job[];
  @Input() urlPrefix: string;
  @Input() typeSelectValues: string[];
  @Input() typeName: string;
  displayData: Job[] = this.jobs;
  searchStatus = [];
  searchTypes = [];
  filterStatusList = [
    {text: 'Ready', value: 'Ready'},
    {text: 'Running', value: 'Running'},
    {text: 'Not Received', value: 'Not_Received'},
    {text: 'Done', value: 'Done'},
    {text: 'Error', value: 'Error'}
  ];
  loading = true;

  constructor() {
  }

  ngOnInit() {
    if (this.jobs.length > 0) {
      this.displayData = this.jobs;
      this.loading = false;
    }
  }

  filterStatusChange(value: string[]): void {
    this.searchStatus = value;
    this.search();
  }

  filterTypeChange(value: string[]): void {
    this.searchTypes = value;
    this.search();
  }

  search(): void {
    const filterTypeFunc = (item) => {
      return (this.searchTypes.length ? this.searchTypes
        .some(statu => item[this.typeName].indexOf(statu) !== -1) : true);
    };
    const filterStatusFunc = (item) => {
      return (this.searchStatus.length ? this.searchStatus
        .some(statu => {
          return item.Last_Job_Status.indexOf(statu) !== -1;
        }) : true);
    };
    this.displayData = this.jobs.filter(item => filterStatusFunc(item)).filter(item => filterTypeFunc(item));
  }
}
