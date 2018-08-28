import { Component, OnInit, Input} from '@angular/core';
import { Job } from '../../core/models/job';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  @Input() job: Job;
  constructor() { }

  ngOnInit() {
  }

}
