import { InMemoryDbService } from 'angular-in-memory-web-api';
import {iJobs} from './mock-i-jobs';
import {eJobs} from './mock-etl-jobs';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {eJobs, iJobs};
  }
}
