import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './userService.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) { }

    canActivate(): boolean {
        const loggedUser = this.userService.loggedUser;
        if(!loggedUser.id) {
            this.router.navigateByUrl('login');
            return;
        } else {
            return true;
        }
    }
    
    
}