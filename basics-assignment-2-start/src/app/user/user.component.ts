import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username = '';
  isValidUserName = false;
  constructor() { }

  ngOnInit() {
  }
  
  resetUserName() {
    this.username = '';
  }

  validateUserName() {
    if ((this.username.trim()) === '') {
      this.isValidUserName = false;
    } else {
      this.isValidUserName = true;
    }
  }
}
