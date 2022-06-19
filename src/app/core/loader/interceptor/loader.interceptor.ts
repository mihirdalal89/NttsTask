import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize, catchError } from "rxjs";
import { LoaderService } from "../service/loader.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor{
    constructor(private loaderService:LoaderService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log(req);
        this.loaderService.show();

        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('Token')}`,
                xUser: `${localStorage.getItem('User')}`
            }
        }); 

        return next.handle(req).pipe(
           finalize(()=>this.loaderService.hide())
        )
    }
}