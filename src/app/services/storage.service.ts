import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  getItems() {
    return localStorage;
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
    console.log("the items are removed");
  }

  clear() {
    localStorage.clear();
  }

  getLength(){
    return localStorage.length;
  }
}
