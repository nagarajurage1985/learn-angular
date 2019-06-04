import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
  }
 

  invalidLogin: boolean; 

  onUserLogin(credentials) {
    this.router.navigate(['/products']);
  }

}



