import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../domain/User';

@Injectable({ providedIn: 'root' })
export class UserService {
  public users$: BehaviorSubject<User[]> = new BehaviorSubject([
    new User('1', 'Maciek', []),
    new User('2', 'Aga', []),
    new User('3', 'Stefan', []),
  ]);

  public activeUserId$ = new BehaviorSubject<string>('');

  public rentBook(bookId: string, userId: string) {
    const newUsers = this.users$.value.map((u) => {
      if (u.id === userId) {
        return new User(u.id, u.name, [...u.books, bookId]);
      } else {
        return u;
      }
    });

    this.users$.next(newUsers);
  }

  public returnBook(bookId: string) {
    const newUsers = this.users$.value.map((u) => {
      if (u.id === this.activeUserId$.value) {
        return new User(
          u.id,
          u.name,
          u.books.filter((b) => b !== bookId)
        );
      } else {
        return u;
      }
    });

    this.users$.next(newUsers);
  }
}
