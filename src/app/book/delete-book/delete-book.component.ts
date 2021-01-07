import { Component, OnInit } from '@angular/core';
import {Book} from '../../../model/book';
import {BookServiceService} from '../../../service/book-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
book: Book = {};
id: number =0;
  constructor(private bookService: BookServiceService,
              private activateRoute: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
  }

  private getBook(id: number) {
    return this.bookService.getBookById(id).subscribe( value => {
      this.book = value;
    })
  }
  deleteBook(id: number){
    this.bookService.deleteBookById(id).subscribe(()=> {
        alert('Xoá thành công');
        this.router.navigate(['/list-book']);
      },
      error => console.log(error));
  }
}
