import { SharedService } from './../../services/shared.service';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (this.sharedService.sidebarInitialization) {
      this.sharedService.showSideBar = true;
      this.sharedService.sidebarInitialization = false;
    }
    console.log("the event s", event, this.sharedService.showSideBar);
    // Same logic as in the previous example
  }

  constructor(public sharedService: SharedService, public router: Router) { }
}
