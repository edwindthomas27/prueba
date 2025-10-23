import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

const API_URL="https://da-pw.tupide.mx/api/"

@Injectable({
  providedIn: 'root'
})
export class WebApi {
  constructor(private http: HttpClient ) {}

  get<T>(url: string):Observable<T>{
    return this.http.get<T>(API_URL + url).pipe(
      catchError(this.errorhandler)
    )
  }


  private errorhandler(error: Error | any) {
    return throwError(()=>error.message || "Server Error");
  }
}
