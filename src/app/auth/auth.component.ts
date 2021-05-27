import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus!: boolean;
  router: any;

  constructor(private authService: AuthService, private r: Router) { this.router = r }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('sign in !')
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['store'])
      }
    )
  }

  onSignOut() {
    this.authService.signOut()
    this.authStatus = this.authService.isAuth;
    this.router.navigate(['home'])

  }

}
