import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Job} from './models/job';
import {User} from './models/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './services/auth.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClient,
    HttpHeaders,
  ],
  declarations: [],
  exports: [Job, User, AuthService],
})
export class CoreModule {
}
