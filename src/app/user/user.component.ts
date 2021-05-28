import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users!: any[];
  userSubscription: any;

  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
    this.userSubscription = this.userService.userSubject.subscribe(
      (u: any[]) => {
        this.users = u;
      }
    )
    this.userService.emitUser();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
