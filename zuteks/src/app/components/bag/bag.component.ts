import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { UserService } from 'src/app/services/userService.service';
import { Product } from '../product/Product.class';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {

  allProducts: Product[];

  constructor(private userService:UserService, private restApi: RestApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getBasketForUser();
    
  }

  getBasketForUser(){
    this.restApi.getBasketForUser(this.userService.loggedUser.id)
    .subscribe((response: Product[]) => {
      this.allProducts = response;
    });
  }

  saveOrder(product: Product){
    this.restApi.saveOrder({product_id: product.id, user_id: this.userService.loggedUser.id, mapId: product.mapId })
    .subscribe(response => {
      this.toastr.success('Your order is complete');
      this.getBasketForUser();
    })
  }

  removeFromBasket(product: Product) {
    this.restApi.deleteFromBasket(product.mapId).subscribe(response => {
      this.toastr.success('Product removed from basket')
       this.getBasketForUser();
    });
  }

}
