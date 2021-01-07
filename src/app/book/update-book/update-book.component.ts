import { Component, OnInit } from '@angular/core';
import {Book} from '../../../model/book';
import {BookServiceService} from '../../../service/book-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
book: Book= {};
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
  getBook(id : number){
    return this.bookService.getBookById(id).subscribe(value => {
      this.book = value;
    });
  }
updateBook(id : number){
    // @ts-ignore
  return this.bookService.updateBook(id, this.book).subscribe(
    () => {
      console.log('Thành công');
    }, () => {
      console.log('Xảy ra lỗi');
    })
}
}
