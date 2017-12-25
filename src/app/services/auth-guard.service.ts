import { AuthService } from './auth.service';
import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth : AuthService, private router : Router) { }

  canActivate(route, state : RouterStateSnapshot){
    return this.auth.user$.map(user => {
      if(user) return true;

      this.router.navigate(['login'], { queryParams : { returnUrl : state.url }});
      return false;
    })
  }
}
