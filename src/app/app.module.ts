import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/public/login/login.component';
import { MaterialModules } from './material.module';
import { SharedService } from 'src/app/services/shared.service';
import { HomeComponent } from './pages/public/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { ShirtsComponent } from './pages/public/shirts/shirts.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PhantsComponent } from './pages/public/phants/phants.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SortPopupComponent } from './pages/public/sort-popup/sort-popup.component';
import { ProductComponent } from './pages/public/product/product.component';
import { CheckoutComponent } from './pages/public/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    ShirtsComponent,
    PhantsComponent,
    FooterComponent,
    SortPopupComponent,
    ProductComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
