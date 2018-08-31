import {Injectable} from '@angular/core';
import {Job} from '../models/job';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  /* Test */
  private eJobUrl = 'api/eJobs';
  private iJobUrl = 'api/iJobs';
  private eDetailUrl = 'api/eJobs';
  private iDetailUrl = 'api/iJobs';
  private eUpdate = 'api/eJobs';
  private iUpdate = 'api/iJobs';

  /* Production */
  // private eJobUrl = '../api/ejob_list.ashx';
  // private iJobUrl = '../api/ijob_list.ashx';
  // private eDetailUrl = '../api/ejob_query.ashx';
  // private iDetailUrl = '../api/ijob_query.ashx';
  // private eUpdate = 'api/eJobs';
  // private iUpdate = 'api/iJobs';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  getJobs(EoI: string): Observable<Job[]> {
    let reqUrl = '';
    if (EoI === 'E') {
      reqUrl = this.eJobUrl;
    } else if (EoI === 'I') {
      reqUrl = this.iJobUrl;
    } else {
      return null;
    }
    return this.http.get<Job[]>(reqUrl)
      .pipe(
        catchError(this.handleError('getJobs', []))
      );
  }

  getJob(EoI: string, jobName: string): Observable<Job> {
    let reqUrl = '';
    if (EoI === 'E') {
      // reqUrl = this.eDetailUrl + '?Job_Name=' + jobName;
      reqUrl = this.eDetailUrl + '?Job_Name=' + jobName;
    } else if (EoI === 'I') {
      // reqUrl = this.iDetailUrl + '?Job_Name=' + jobName;
      reqUrl = this.iDetailUrl + '?Job_Name=' + jobName;
    } else {
      return null;
    }
    return this.http.get<Job>(reqUrl).pipe(
      catchError(this.handleError<Job>('getJob'))
    );
  }

  updateJobStatus(EoI: string, jobStatus: string): Observable<string> {
    let reqUrl = '';
    if (EoI === 'E') {
      reqUrl = this.eDetailUrl;
    } else if (EoI === 'I') {
      reqUrl = this.iDetailUrl;
    } else {
      return null;
    }
    return this.http.post<string>(reqUrl, jobStatus)
      .pipe(
        catchError(this.handleError('Update error', null))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
