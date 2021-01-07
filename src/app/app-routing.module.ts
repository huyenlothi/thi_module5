import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBookComponent} from './book/list-book/list-book.component';
import {BookDetailsComponent} from './book/book-details/book-details.component';
import {CreateBookComponent} from './book/create-book/create-book.component';
import {UpdateBookComponent} from './book/update-book/update-book.component';
import {DeleteBookComponent} from './book/delete-book/delete-book.component';

const routes: Routes = [
  {
    path: 'list-book',
    component: ListBookComponent
  },
  {
    path: 'book-details/:id',
    component: BookDetailsComponent
  },
  {
    path: 'create-book',
    component: CreateBookComponent
  },
  {
    path: 'update-book/:id',
    component: UpdateBookComponent
  },
  {
    path: 'delete-book/:id',
    component: DeleteBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
