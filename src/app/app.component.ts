import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  constructor(public sharedService:SharedService) {
    console.log("inside the app component", )
    setTimeout(()=>{
      this.sharedService.login = "Testing"
    },1000)
    this.login()
  }

  login(){
    setTimeout(()=>{
      console.log("this.sharedService.login",this.sharedService.login)
    },2000)
  }
}
