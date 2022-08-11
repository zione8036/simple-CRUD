import { Injectable } from '@angular/core';
import { Header} from './header';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }
  getName: Header[]=[
   
    {"navName":"Book items","navLink": "book-item"},
    {"navName": "Book list","navLink": "book-list"},
    {"navName": "Blog items","navLink": "blog-item"},
    {"navName": "Blog list","navLink": "blog-list"},
    {"navName": "Profile","navLink": "profile"},
    
  ];

  getNavName(){
    return this.getName;
    
  }
}
