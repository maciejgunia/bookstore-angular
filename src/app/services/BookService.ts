import { Injectable } from '@angular/core';
import { Book } from '../domain/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  public books: Book[] = [
    { id: '1', title: 'In Search of Lost Time', userId: null },
    { id: '2', title: 'Ulysses by James Joyce', userId: null },
    { id: '3', title: 'Don Quixote by Miguel de Cervantes', userId: null },
  ];

  public rentBook(bookId: string, userId: string) {
    const bookToRent = this.books.find((b) => b.id === bookId);

    if (bookToRent) {
      bookToRent.userId = userId;
    }
  }

  public returnBook(bookId: string) {
    const bookToReturn = this.books.find((b) => b.id === bookId);

    if (bookToReturn) {
      bookToReturn.userId = null;
    }
  }
}
