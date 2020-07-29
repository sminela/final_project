import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../registration/User.class';
import { UserService } from 'src/app/services/userService.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private userService: UserService, private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  signUp() {
    this.router.navigateByUrl('registration');
  }

  login() {
    if(this.user.username && this.user.password) {
      this.userService.login(this.user).subscribe((response: User) => {
        if(response) {
          this.user = response;
          delete this.user.password;
          localStorage.setItem('loggedUser', JSON.stringify(this.user));
          this.router.navigateByUrl('home');
        } else {
          this.toastr.warning('Wrong username or password!');
        }
      });

    }
    else {
      this.toastr.warning('Please enter username and password!')

    }
  
  }
 
}
