import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './pages/public/login/login.component';
import { SignupComponent } from './pages/public/signup/signup.component';
import { ShirtsComponent } from './pages/public/shirts/shirts.component';
import { TShirtsComponent } from './pages/public/t-shirts/t-shirts.component';
import { PhantsComponent } from './pages/public/phants/phants.component';
import { ProductComponent } from './pages/public/product/product.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'shirts', component: ShirtsComponent },
  { path: 't-shirts', component: TShirtsComponent },
  { path: 'phants', component: PhantsComponent },
  { path: 'product', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
