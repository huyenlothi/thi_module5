import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListBookComponent } from './book/list-book/list-book.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { CreateBookComponent } from './book/create-book/create-book.component';
import {FormsModule} from '@angular/forms';
import { UpdateBookComponent } from './book/update-book/update-book.component';
import { DeleteBookComponent } from './book/delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    BookDetailsComponent,
    CreateBookComponent,
    UpdateBookComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
