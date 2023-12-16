import { Component } from '@angular/core';
import { ApiCallsService } from 'src/app/services/api-calls/api-calls.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private apiCalls: ApiCallsService) {

  }

  userLogin() {
    this.apiCalls.login().subscribe({
      next: (value) => {
        console.log("In next",value);
        // Handle emitted value
      },
      error: (error) => {
        // Handle error
      },
      complete: () => {
        console.log("In complete");

        // Handle completion
      },
    });
  }
}
