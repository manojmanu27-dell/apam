import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { HttpRequestArgsService } from '../http-request-args.service';
import { Observable } from 'rxjs';
import { AbstractHttpService } from '../abstract-http.service';
import { BackendService } from 'src/app/Backed.service';


@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Headers': "*"
  })
  constructor(
    private httpRequest: HttpRequestArgsService,
    private abstractHttpService: AbstractHttpService) { }

  setHeader() {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public login(): Observable<any> {
    this.httpRequest.url = BackendService.login;
    this.httpRequest.headers = this.headers;

    return this.abstractHttpService.get$(this.httpRequest);
  }
  // public getImages(): Observable<any> {
  //   this.httpRequest.url = BackendService.login;
  //   this.setHeader();
  //   this.httpRequest.headers = this.headers;
  //   return this.abstractHttpService.get$(this.httpRequest);
  // }
}