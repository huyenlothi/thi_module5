import { Component, OnInit } from '@angular/core';
import {Book} from '../../../model/book';
import {BookServiceService} from '../../../service/book-service.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
book: Book = {};
  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
  }
createProduct(){
    return this.bookService.createNewBook(this.book).subscribe( ()=> {
      console.log('thanh cong');
    }, error => {console.log('xay ra loi')});
}
}
