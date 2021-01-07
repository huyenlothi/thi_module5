import { Component, OnInit } from '@angular/core';
import {Book} from '../../../model/book';
import {BookServiceService} from '../../../service/book-service.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
books: Book[] =[];
  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.getAllBook();
  }

   getAllBook() {
    this.bookService.getAllBook().subscribe(result => {
      this.books = result;
    }, error => console.log(error));
  }
}
