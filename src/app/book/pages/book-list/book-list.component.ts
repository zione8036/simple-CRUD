import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books:any;

  constructor(private _bookService: BookService) { }

  ngOnInit(){
    this._bookService.getBookDetails().subscribe(a=>{
    this.books = a;
})
  }

}
