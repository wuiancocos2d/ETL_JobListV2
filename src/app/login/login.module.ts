import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShareModule} from '../share/share.module';
import {LoginRoutingModule} from './login-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';

@NgModule({
  imports: [
    ShareModule,
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent],

})
export class LoginModule {
}
