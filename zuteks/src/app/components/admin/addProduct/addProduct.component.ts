import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Product } from '../../product/Product.class';
import { Category } from '../../product/Category.class';
import { Subcategory } from '../../product/Subcategory.class';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addProduct',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.scss']
})
export class AddProductComponent implements OnInit {

   product: Product = new Product();
   categories: Category [];
   subcategories: Subcategory [];
    

  constructor(private restApi:RestApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
     this.getAllCategories();
     this.getAllSubcategories()
   
  }

  addNewProduct(product: Product){
      this.restApi.addNewProduct(product).subscribe(response => {
          this.toastr.success('Product successfully added');
      })
  }

  removeProduct(product){
      this.product = new Product();
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
}