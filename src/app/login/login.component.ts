import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  firebaseErrorMessage: string;


  constructor(public fireAuth: AngularFireAuth,
              public auth: AuthService,
              private router: Router) {
                
    this.loginForm = new FormGroup({
      'email': new FormControl(''),
      'password': new FormControl('')
    });
    this.firebaseErrorMessage = '';
  }

  loginUser() {
    if (this.loginForm.invalid)
      return;

    this.auth.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
      if (result == null) {
        this.router.navigate(['/dashboard']);
      }
      else if (result.isValid == false) {
        this.firebaseErrorMessage = result.message;
      }
    });
  }
}
