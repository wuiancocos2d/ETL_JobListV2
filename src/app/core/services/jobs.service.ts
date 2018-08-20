import {Injectable} from '@angular/core';
import {Job} from '../models/job';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private eJobUrl = 'api/eJobs';
  private iJobUrl = 'api/iJobs';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  getJobs(EoI: string): Observable<Job[]> {
    if (EoI === 'E') {
      return this.http.get<Job[]>(this.eJobUrl);
    } else if (EoI === 'I') {
      return this.http.get<Job[]>(this.iJobUrl);
    } else {
      return null;
    }
  }

}
