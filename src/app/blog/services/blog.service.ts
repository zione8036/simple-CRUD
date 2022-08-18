import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

private _reload$ = new Subject<void>();
  constructor(private http: HttpClient) { }
  
get reloadPage$(){
  return this._reload$;
}
  postBlogDetails(data: any){
    return this.http.post<any>(`${environment.url}/blogs`, data).pipe(
      map((a =>{
        return a;
      })));
  }
  getBlogDetails(){
    return this.http.get<any>(`${environment.url}/blogs`).pipe(
      map((a =>{
        return a;
      })));
     
  }
  putBlogDetails(data: any, id: number){
    return this.http.put<any>(`${environment.url}/blogs/${id}`, data).pipe(
      map((a:any) =>{
        return a; 
      }));
  }
  deleteBlogDetails(id: number){
    return this.http.delete<any>(`${environment.url}/blogs/`+id).pipe(
      map((a =>{
        return a;
      })));
  }
  deleteBlogAll(index: number){

      return this.http.delete<any>(`${environment.url}/blogs/`+index).pipe(
      map((a =>{
        this.reloadPage$.next();
        return a;
      }
      
      )));
  }
  
}
