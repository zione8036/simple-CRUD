import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
books!:Book[];

  constructor(private _bookService: BookService) { }

  ngOnInit(){
    this.books= this._bookService.getBookDetails();
  }
}
