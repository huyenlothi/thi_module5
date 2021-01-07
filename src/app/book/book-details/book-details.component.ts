import { Component, OnInit } from '@angular/core';
import {Book} from '../../../model/book';
import {BookServiceService} from '../../../service/book-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
book : Book = {};
id: number =0;
  constructor(private bookService: BookServiceService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(async  paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    })
  }

  ngOnInit(): void {
  }

  private getBook(id: number) {
    return this.bookService.getBookById(id).subscribe(value => {
      this.book = value;
    })
  }
}
