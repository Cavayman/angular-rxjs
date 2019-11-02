import {Component, OnInit} from '@angular/core';
import {UserStore} from '../../shared/services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  showSpinner: any;

  loggedIn: boolean;

  constructor(private userStoreService: UserStore) {
    this.userStoreService.isUserLoggedIn().subscribe(res => {
      this.loggedIn = res;
      console.log('Logged in', this.loggedIn);
    });
  }

  ngOnInit() {
  }

  login() {
    this.showSpinner = true;
    const user = {userName: this.username, password: this.password};
    this.userStoreService.loginUser(user).subscribe(res => {
      this.showSpinner = false;
      console.log('user logged in');
    });
  }

  logOut() {
    this.userStoreService.logoutUser().subscribe(res => {
      console.log('user logged out');
    });
  }
}
