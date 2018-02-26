import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
    console.log(this.credentials);
    if (this.credentials.email === '' || this.credentials.name === '' || this.credentials.password === ''){
      this.router.navigateByUrl('/register');
    }
    else {
      this.auth.register(this.credentials).subscribe(() => {
        this.router.navigateByUrl('/profile');
      }, (err) => {
        console.error(err);
      });
    }
  }
}
