import { ProductService } from './services/product.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './services/user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './services/category.service';
import { ProductsFilterComponent } from './products-filter/products-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductsFilterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CustomFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path : '', component : ProductsComponent },
      { path : 'products', component : ProductsComponent },
      { path : 'shopping-cart', component : ShoppingCartComponent },
      { path : 'login', component : LoginComponent },

      { path : 'check-out', component : CheckOutComponent, canActivate : [AuthGuard] },
      { path : 'order-success', component : OrderSuccessComponent, canActivate : [AuthGuard] },
      { path : 'my/orders', component : MyOrdersComponent, canActivate : [AuthGuard] },
      
      { 
        path : 'admin/products/new', 
        component : ProductFormComponent, 
        canActivate : [AuthGuard, AdminAuthGuard]
      },
      { 
        path : 'admin/products/:id', 
        component : ProductFormComponent, 
        canActivate : [AuthGuard, AdminAuthGuard]
      },
      { 
        path : 'admin/products', 
        component : AdminProductsComponent, 
        canActivate : [AuthGuard, AdminAuthGuard] 
      },
      { 
        path : 'admin/orders', 
        component : AdminOrdersComponent, 
        canActivate : [AuthGuard, AdminAuthGuard]
      }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    CategoryService,
    ProductService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
