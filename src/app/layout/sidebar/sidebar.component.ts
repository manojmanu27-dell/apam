import { SharedService } from './../../services/shared.service';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    // if(!this.sharedService.sidebarHide){

    //   this.sharedService.sidebarHide = true;
    // }
    console.log("the event s",event,this.sharedService.sidebarHide);
    // Same logic as in the previous example
  }

  constructor(public sharedService: SharedService){}
}
