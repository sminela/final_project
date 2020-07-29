import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { ProductComponent } from './components/product/product.component';
import { ListComponent } from './components/list/list.component';
import { BagComponent } from './components/bag/bag.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './services/AuthGuard.service';
import { AdminComponent } from './components/admin/admin.component';
import { AddProjectComponent } from './components/admin/addProject/addProject.component';
import { AddProductComponent } from './components/admin/addProduct/addProduct.component';
import { ProjectPreviewComponent } from './components/project-preview/project-preview.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'project-preview', component: ProjectPreviewComponent },
  { path: 'products', component: ProductComponent },
  { path: 'shopping-list', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'shopping-bag', component: BagComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'add-project', component: AddProjectComponent, canActivate: [AuthGuard] },
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
