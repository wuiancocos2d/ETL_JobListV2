import {Component, OnInit} from '@angular/core';
import {User} from '../core/models/User';
import {AuthService} from '../core/services/auth.service';
import {MessageService} from '../core/services/message.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  user = new User('', '');


  constructor(private fb: FormBuilder, private auth: AuthService, private messages: MessageService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (!this.user.usr || !this.user.psd) {
      return null;
    } else {
      this.auth.loginAuth(this.user).subscribe(() => {
        if (this.auth.isLoggedIn) {
          console.log('in');
        } else {
          console.log('out');
        }
      });
    }
  }
}

