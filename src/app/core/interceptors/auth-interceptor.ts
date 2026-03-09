import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
  
  const authReq = req.clone({
    setHeaders: {
      'X-API-KEY': 'SecretZombieKey123'
    }
  
  });
  return next.handle(authReq);
}
}

