import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product/Product.class';
import { UserService } from 'src/app/services/userService.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  @Input() product: Product;
  @Output() backToProductsEmit = new EventEmitter();
  constructor(private userService: UserService, private restApi: RestApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  backToProducts(){
    this.backToProductsEmit.emit();
  }

  addProductToBasket(product: Product) {
    if(!this.userService.loggedUser.id) {
      this.toastr.warning('Only logged users are allowed to make a purchase!');
    }
    if(product.isInBasket == '1'){
      this.toastr.warning('Product already in basket');
    } else { 
        this.restApi.insertToBasket({user_id: this.userService.loggedUser.id, product_id: product.id, whereTo:'BASKET'}).subscribe(response => {
          this.toastr.success('Product successfully added to basket');  
        });
      } 
    }
    
    

  addProductToWishlist(product: Product) {
    if(!this.userService.loggedUser.id) {
      this.toastr.warning('Only logged users can make Wishlist. Please log in!');
    }else {
    this.restApi.insertToWishlist({user_id: this.userService.loggedUser.id, product_id: product.id, whereTo:'WISHLIST'}).subscribe(response => {
      this.toastr.success('Product successfully added to wishlist');
    }); }
  }

}
