import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from './Product.class';
import { RestApiService } from 'src/app/services/rest-api.service';
import { SearchProduct } from './SearchProduct.class';
import { Category } from './Category.class';
import { Subcategory } from './Subcategory.class';
import { UserService } from 'src/app/services/userService.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product [] = [];
  categories: Category [] = [];
  subcategories: Subcategory [] = [];
  selectedProduct: Product;
  searchProduct: SearchProduct;
 
 
 

  constructor(private restApi: RestApiService, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.searchProduct = new SearchProduct();
    this.getAllProducts();
    this.getAllCategories();
    this.getAllSubcategories();
  }

  searchProducts() {
    this.restApi.searchForProducts(this.searchProduct).subscribe((response: Product[]) => {
      this.products = response;
      console.log(this.products);
      
    });
  }

  clearSearchForm() {
    this.searchProduct = new SearchProduct();
    this.getAllProducts();
  }

  getAllProducts() {
    this.restApi.getAllProductsWithCategorySubcategory().subscribe((response: Product[]) => {
      this.products = response;
      
    });
   }


  getAllCategories() {
    this.restApi.getAllCategories().subscribe((response: Category[]) => {
      this.categories = response;
      console.log(this.categories);
      
    });
  }

  getAllSubcategories() {
    this.restApi.getAllSubcategories().subscribe((response: Subcategory[]) => {
      this.subcategories = response;
      console.log(this.subcategories);
      
    });
  }

  showMore(product: Product) {
    this.selectedProduct = product; 
  }

  addProductToBasket(product: Product) {
    if(!this.userService.loggedUser.id) {
      this.toastr.warning('Only logged users are allowed to make a purchase!');
    }
    else if(product.isInBasket == '1'){
      this.toastr.warning('Product already in basket');
    } 
    else { 
        this.restApi.insertToBasket({user_id: this.userService.loggedUser.id, product_id: product.id, whereTo:'BASKET'}).subscribe(response => {
          this.toastr.success('Product successfully added to basket');  
          this.getAllProducts();
        });
      } 
    }
    

  addProductToWishlist(product: Product) {
    if(!this.userService.loggedUser.id) {
      this.toastr.warning('Only logged users can make Wishlist. Please log in!');
    }else {
    this.restApi.insertToWishlist({user_id: this.userService.loggedUser.id, product_id: product.id, whereTo:'WISHLIST'}).subscribe(response => {
      console.log(product)
    }); }
  }

  removeFromWishlist(product: Product) {
    this.restApi.removeFromWishlistOnProductPage(product.id).subscribe(response => {
      console.log('Uspjesno ste obrisali proizvod' + product.id); 
    });
  }
  


}
