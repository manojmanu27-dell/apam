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

  constructor(public route: Router) {
    console.log("the route is ",route.url)
  }
  scroll: number = 0;
}
