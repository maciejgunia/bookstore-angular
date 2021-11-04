import { Component } from '@angular/core';
import { BookService } from 'src/app/services/BookService';
import { UserService } from 'src/app/services/UserService';

@Component({
  selector: 'booklist',
  templateUrl: './BookListComponent.html',
  styleUrls: ['./BookListComponent.scss'],
})
export class BookListComponent {
  constructor(
    public bookService: BookService,
    public userService: UserService
  ) {}

  public rentBook(bookId: string) {
    this.bookService.rentBook(bookId, this.userService.activeUserId$.value);
    this.userService.rentBook(bookId, this.userService.activeUserId$.value);
  }

  public returnBook(bookId: string) {
    this.bookService.returnBook(bookId);
    this.userService.returnBook(bookId);
  }
}
