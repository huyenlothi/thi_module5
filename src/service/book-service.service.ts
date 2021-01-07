import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Book} from '../model/book';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  getAllBook(): Observable<Book[]>{
    return this.http.get<Book[]>(API_URL + `/books`);
  }
  createNewBook(book: Book): Observable<Book>{
    return  this.http.post<Book>(API_URL + `/books`, book);
  }
  updateBook(id: number, book: Book): Observable<Book>{
    return  this.http.put<Book>(API_URL + `/books/${id}`, book);
  }
  getBookById(id: number): Observable<Book>{
    return this.http.get<Book>(API_URL + `/books/${id}`);
  }
  deleteBookById(id: number): Observable<Book>{
    return this.http.delete<Book>(API_URL + `/books/${id}`);
  }

}
