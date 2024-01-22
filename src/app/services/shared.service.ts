import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public isUserLoggedIn: Boolean = false;
  public login!: string;
  public loading!: boolean;
  public bagLength: any;
  public bagItems: any;
  public productObj: any;
  public showSideBar: Boolean = true;
  public sidebarInitialization: Boolean = false;
  constructor(private spinner: NgxSpinnerService, private storage: StorageService) {
    this.bagItems = this.storage.getItems();
    console.log("tghis s called")
  }

  showSpinner(): void {
    this.spinner.show();
  }

  hideSpinner(): void {
    this.spinner.hide();
  }

  setItem(key: string, value: any) {
    this.storage.setItem(key, value);
    this.bagLength = this.storage.getLength();
    this.bagItems = this.storage.getItems();
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
    this.bagLength = this.storage.getLength();
    this.bagItems = this.storage.getItems();
  }

  getItem(key: string) {
    return this.storage.getItem(key);
  }


}
