import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  public static currentTeamId : any;
  constructor(public auth: AuthService) {
   }

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let requestOption:any = {};
     
    if(this.auth.getToken()) {
      requestOption.setHeaders = {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    } 

    request = request.clone(requestOption); 
    return next.handle(request)
  }
}