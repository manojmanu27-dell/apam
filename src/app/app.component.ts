import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ui';
  constructor(public sharedService: SharedService) {
    console.log('inside the app component');
    /** spinner starts on init */
    // this.sharedService.showSpinner();
    // setTimeout(() => {
    //   this.sharedService.hideSpinner();
    // }, 5000);
  }

}
