import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

//Modules
import { CommonModule } from '@angular/common';
import {BookRoutingModule} from './book-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Components
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { CommandBarComponent } from '../shared/components/command-bar/command-bar.component';
import { BookFormComponent } from '../modules/book/pages/book-form/book-form.component';



//service
import {BookService} from './services/book.service';



@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    CommandBarComponent,
    BookFormComponent,

  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[BookService]
  
})
export class BookModule { }
