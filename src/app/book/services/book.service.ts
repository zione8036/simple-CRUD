import { Injectable } from '@angular/core';
import { Book } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getDetails: Book[] = [{"id":1, "name":"Pride and Prejudice", "author":"Jane Austen", "isbn":"9780141439518"},
   {"id":2, "name":"To Kill a Mockingbird", "author":"Harper Lee", "isbn":"9780446310789"},
   {"id":3, "name":"One Hundred Years of Solitude", "author":"Gabriel García Márquez", "isbn":"9780241968581"}];

  getBookDetails(){
    return this.getDetails;
  }
}
