import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../Shared/Entities/User';
import { UserService } from '../Shared/Services/user.service';
import { AuthService } from './../Shared/Services/auth.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService) { }

  onSubmit(form: NgForm){
    const value = form.value;
    this.user.username = value.username;
    this.user.password = value.password;
    console.log(this.user);
    this.userService.Login(this.user);
    form.reset();
  }

  onSignUp(form: NgForm){
    const value = form.value;
    this.user.username = value.username;
    this.user.password = value.password;
    console.log(this.user);
    this.user = new User();

    // this.subjectService.addSubject(this.subject);
    form.reset();
  }

  ngOnInit(): void {
  }

}
