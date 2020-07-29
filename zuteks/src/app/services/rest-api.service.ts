import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SearchProduct } from '../components/product/SearchProduct.class';



@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  serverUrl: string = environment.serverUrl;

  constructor(private http: HttpClient ) { }

  getAllProducts(){
   return this.http.get(this.serverUrl + "all/products")
  };

  getAllProductsWithCategorySubcategory(){
    return this.http.get(this.serverUrl + "all/products/category/subcategory");
  }

  getProjectsCount(){
    return this.http.get(this.serverUrl + "projects/count");
  }

  getOrdersCount(){
    return this.http.get(this.serverUrl + "orders/count");
  }

  searchForProducts(searchCriteria: SearchProduct ) {
    return this.http.post(this.serverUrl + "product/search", searchCriteria)  
  }

  getAllProjects(){
    return this.http.get(this.serverUrl + "all/projects")
  };

  getLastThreeProjects(){
    return this.http.get(this.serverUrl + "last-three-projects")
  };

  getAllCategories(){
    return this.http.get(this.serverUrl + "all/categories")
  };

  getAllSubcategories(){
    return this.http.get(this.serverUrl + "all/subcategories")
  };

  insertToWishlist (request){
    return this.http.post(this.serverUrl + "products/add-to-wishlist", request)
  }

  getBasketForUser(user_id: number){
    return this.http.get(this.serverUrl + "basket/products?user_id=" + user_id)
  }

  getWishlistForUser(user_id: number){
    return this.http.get(this.serverUrl + "wishlist/products?user_id=" + user_id)
  }

  getOrdersForUser(user_id: number){
    return this.http.get(this.serverUrl + "ordered/products?user_id=" + user_id)
  }

  removeFromWishlist(id: number){
    return this.http.delete(this.serverUrl + "wishlist/remove?id=" + id);
  }

  removeFromWishlistOnProductPage(id:number) {
    return this.http.delete(this.serverUrl + "product//wishlist/remove?id=" + id)
  }

  saveOrder(request){
    return this.http.post(this.serverUrl + "products/order", request);
  }

  insertToBasket (request){
    return this.http.post(this.serverUrl + "products/basket", request)
  }

  deleteFromBasket(id: number){
    return this.http.delete(this.serverUrl + "basket/delete?id=" + id)
  }



  removeProduct(id: number){
    return this.http.delete(this.serverUrl + "product/remove?id=" + id);
  }

  removeProject(id: number){
    return this.http.delete(this.serverUrl + "project/remove?id=" + id);
  }

  addNewProject(request){
    return this.http.post(this.serverUrl + "new/project", request)
  }

  addNewProduct(request){
    return this.http.post(this.serverUrl + "new/product", request)
  }

  getProject(id: number){
    return this.http.get(this.serverUrl + "project/preview?id=" + id)
  }


}
