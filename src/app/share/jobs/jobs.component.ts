import {Component, OnInit, Input} from '@angular/core';
import {Job} from '../../core/models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  @Input() jobs: Job[];
  tableData: Job[] = [...this.jobs];
  filterStatusList = [
    {text: 'Ready', value: 'Ready'},
    {text: 'Running', value: 'Running'},
    {text: 'Done', value: 'Done'},
    {text: 'Error', value: 'Error'}
  ];
  constructor() {
  }

  ngOnInit() {
  }

}
