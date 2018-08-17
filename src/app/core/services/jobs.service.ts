import {Injectable} from '@angular/core';
import {Job} from '../models/job';
import {I_Jobs} from '../mock/mock-i-jobs';
import {ETL_Jobs} from '../mock/mock-etl-jobs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor() {
  }

  getJobs(EoI: string): Job[] {
    if (EoI === 'E') {
      return ETL_Jobs;
    } else if (EoI === 'I') {
      return I_Jobs;
    } else {
      return null;
    }
  }

}
