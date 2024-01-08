import { SharedService } from 'src/app/services/shared.service';
import { Observable } from 'rxjs';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scroll = window.scrollY;
    console.log('window is scrolled down by', scroll);
  }
  bagLength: Number = 0;
  constructor(public route: Router, public sharedService:SharedService) {
    console.log("the route is ", route.url)
    this.sharedService.bagLength = localStorage.length; 
    console.log("the length is",typeof(this.sharedService.bagLength))
    
  }
  scroll: number = 0;
}
