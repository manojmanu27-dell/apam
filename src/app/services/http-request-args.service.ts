import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestArgsService {

  url?: any;
  headers?: HttpHeaders;
  observe?: 'response';
  params?: HttpParams;
  responseType?: 'json'
}
