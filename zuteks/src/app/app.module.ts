import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { ProductComponent } from './components/product/product.component';
import { ListComponent } from './components/list/list.component';
import { BagComponent } from './components/bag/bag.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


import { FooterComponent } from './components/footer/footer.component';
import { ProjectPreviewComponent } from './components/project-preview/project-preview.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { AddProjectComponent } from './components/admin/addProject/addProject.component';
import { AddProductComponent } from './components/admin/addProduct/addProduct.component';
import { ProductItemComponent } from './components/product/product-item/product-item.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ProjectComponent,
    ProductComponent,
    ListComponent,
    BagComponent,
    ProfileComponent,
    AboutComponent,
    ContactComponent,
    AdminComponent,
    LoginComponent,
    RegistrationComponent,
    NotFoundComponent,
    ProductItemComponent,
    FooterComponent,
    ProjectPreviewComponent,
    ListItemComponent,
    AddProjectComponent,
    AddProductComponent,
    ProductPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
