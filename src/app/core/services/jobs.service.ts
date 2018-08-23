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

  private eJobUrl = 'api/eJobs';
  private iJobUrl = 'api/iJobs';

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

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
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
