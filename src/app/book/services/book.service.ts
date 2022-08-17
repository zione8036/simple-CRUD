import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

private _reload$ = new Subject<void>();
  constructor(private http: HttpClient) { }
  get reloadPage$(){
  return this._reload$;
}

  postBookDetails(data: any){
    return this.http.post<any>(`${environment.url}/Book`, data).pipe(
      map((a =>{
        return a;
      })));
  }
  getBookDetails(){
    return this.http.get<any>(`${environment.url}/Book`).pipe(
      map((a =>{
        return a;
      })));
     
  }
 putBookDetails(data: any, id: number){
    return this.http.put<any>(`${environment.url}/Book/${id}`, data).pipe(
      map((a:any) =>{
        return a; 
      }));
  }
  deleteBookDetails(id: number){
    return this.http.delete<any>(`${environment.url}/Book/`+id).pipe(
      map((a =>{
        return a;
      })));
  }
  deleteBookAll(index: number){

      return this.http.delete<any>(`${environment.url}/Book/`+index).pipe(
      map((a =>{
        this.reloadPage$.next();
        return a;
      }
      
      )));
  }
}
