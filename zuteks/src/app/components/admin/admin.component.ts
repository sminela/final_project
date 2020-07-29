import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService.service';
import { Router } from '@angular/router';
import { Product } from '../product/Product.class';
import { RestApiService } from 'src/app/services/rest-api.service';
import { User } from '../registration/User.class';
import { Project } from '../project/Project.class';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  allProducts: Product[] = []
  allUsers: User [] = [];
  projectsNo: string;
  usersNo: string;
  ordersNo: string;
  allProjects: Project [] = [];

  constructor(public userService: UserService, private router:Router, private restApi:RestApiService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllUsers();
    this.getProjectsNo();
    this.getUsersNo();
    this.getOrdersNo();
    this.getAllProjects();
  }

  logout(){
    localStorage.removeItem('loggedUser')
    this.router.navigateByUrl('login')
  }

  getAllProducts() {
    this.restApi.getAllProductsWithCategorySubcategory().subscribe((response: Product[]) => {
      this.allProducts = response;
      
    });
   }

   getAllUsers(){
     this.userService.getAllUsers().subscribe((response: User[]) => {
       this.allUsers = response;
     });
   }

   getAllProjects(){
     this.restApi.getAllProjects().subscribe((response: Project[]) => {
       this.allProjects = response;
     });
   }

   getProjectsNo(){
     this.restApi.getProjectsCount().subscribe(response => {
      this.projectsNo = response[0].projectsNumber + '';
     })
   }
   getUsersNo(){
    this.userService.getUsersCount().subscribe(response => {
     this.usersNo = response[0].usersNumber + '';
    });
  };
  getOrdersNo(){
    this.restApi.getOrdersCount().subscribe(response => {
     this.ordersNo = response[0].ordersNumber + '';
    });
  };

  removeUser(user: User) {
    this.userService.removeUser(user.id).subscribe(response => {
      console.log('Uspjesno ste obrisali korisnika' + user.id); 
      this.getAllUsers();
      this.getUsersNo();
    });
  };
  removeProject(project: Project){
    this.restApi.removeProject(project.id).subscribe(response => {
      this.getAllProjects();
      this.getProjectsNo();
    });
  };
  removeProduct(product: Product){
    this.restApi.removeProduct(product.id).subscribe(response => {
      this.getAllProducts();
    });
  };

  addNewProject() {
    this.router.navigateByUrl('add-project');
  }

  addNewProduct() {
    this.router.navigateByUrl('add-product');
  }


}
