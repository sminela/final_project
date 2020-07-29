import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService.service';
import { Router } from '@angular/router';
import { Product } from '../product/Product.class';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public userService: UserService, private restApi: RestApiService, private router:Router) { }

  products: Product[] = []

  ngOnInit(): void {
    this.ordersForUser();
  }

  logout(){
    localStorage.removeItem('loggedUser')
    this.router.navigateByUrl('login')
  }

  ordersForUser(){
    this.restApi.getOrdersForUser(this.userService.loggedUser.id)
  .subscribe((response: Product[]) => {
    this.products = response;
    console.log(response);
  });
  }
}
