import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public login!: string;
  public loading!: boolean;
  constructor() { }
}
