import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import { tap, catchError, timeout } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AbstractHttpService {
  private headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })
  constructor(private http: HttpClient, private router: Router,
    private sharedService: SharedService) {

  }

  public get$(request: any) {
    this.sharedService.loading = true;
    return this.http.get(request.url, { headers: request.headers, observe: 'response' }).pipe(timeout(60000),
      tap(res => {
        this.sharedService.loading = false;
      }),
      catchError(async (error) => this.handleError(error)),
    )
  }

  // used for getting pdf directly from backend
  public get$$(request: any) {
    this.sharedService.loading = true;
    return this.http.get(request.url, { headers: request.headers, observe: 'response', responseType: 'blob' }).pipe(timeout(60000),
      tap(res => {
        this.sharedService.loading = false;
      }),
      catchError(async (error) => this.handleError(error)),
    )
  }

  public post$(request: any, body: any) {
    this.sharedService.loading = true;
    return this.http.post(request.url, body, { headers: request.headers, observe: 'response' }).pipe(timeout(60000),
      tap(res => {
        this.sharedService.loading = false;
      }),
      catchError(async (error) => this.handleError(error)),
    )
  }

  // when we need to send pdf directly to backend 
  public post$$(request: any, body: any) {
    this.sharedService.loading = true;
    return this.http.post(request.url, body, { headers: request.headers, observe: 'response' }).pipe(timeout(60000),
      tap(res => {
        this.sharedService.loading = false;
      }),
      catchError(async (error) => this.handleError(error, request.url)),
    )
  }

  public handleError(error: Response | any, operation = 'operation') {

    console.log("Inside Handle error......");
    this.sharedService.loading = false;
    console.log("the error is", error);
    let errMsg: string;

    if (error instanceof Response) {
      console.log("error is an instance of response");
    } else {
      console.log("error is not an instance of response");
    }

    if(error.status === 0){
      alert("Site is under maintainence, please visit later")
    }

  }
}
