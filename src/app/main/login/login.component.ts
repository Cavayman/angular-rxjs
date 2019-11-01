import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  showSpinner: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  login() {
    this.showSpinner = true;
    setInterval(() => {
      this.showSpinner = false;
      console.log('finish');
    }, 5000);
  }
}
