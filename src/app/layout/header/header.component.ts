import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
@HostListener("window:resize",['event'])
onResize(){
console.log(window.innerWidth)
}
}
