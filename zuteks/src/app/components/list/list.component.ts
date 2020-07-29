import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { UserService } from 'src/app/services/userService.service';
import { Product } from '../product/Product.class';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  allProducts: Product[] = [];

  constructor(private userService:UserService, private restApi: RestApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.wishlistForUser();
  }

   addProductToBasket(product: Product) {
      this.restApi.insertToBasket({user_id: this.userService.loggedUser.id, product_id: product.id, whereTo:'BASKET'}).subscribe(response => {
        this.toastr.success('Product successfully added to basket');
        this.removeFromWishlist(product)
      });
    }

    wishlistForUser(){
      this.restApi.getWishlistForUser(this.userService.loggedUser.id)
    .subscribe((response: Product[]) => {
      this.allProducts = response;
      console.log(response);
    });
    }
  
    removeFromWishlist(product: Product) {
      this.restApi.removeFromWishlist(product.mapId).subscribe(response => {
        console.log('Uspjesno ste obrisali proizvod'); 
        this.wishlistForUser();
      });
    }
}
