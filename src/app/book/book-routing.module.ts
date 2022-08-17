import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookFormComponent } from '../modules/book/pages/book-form/book-form.component';

const routes: Routes = [
  {
    path: 'book-list',
    component: BookListComponent
  },{
    path: 'book-item',
    component: BookItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }