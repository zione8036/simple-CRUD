import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import {BookRoutingModule} from './book-routing.module';
import {BookService} from './services/book.service';

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
  ],
  imports: [
    CommonModule,BookRoutingModule
  ],
  providers:[BookService]
  
})
export class BookModule { }
