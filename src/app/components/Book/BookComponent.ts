import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/domain/Book';

@Component({
  selector: 'book',
  templateUrl: './BookComponent.html',
  styleUrls: ['./BookComponent.scss'],
})
export class BookComponent {
  @Input('data') public data: Book | undefined;
  @Input('activeUserId') public activeUserId: string | null = '';
  @Output() public rentClicked = new EventEmitter();
  @Output() public returnClicked = new EventEmitter();

  public rentBook() {
    if (typeof this.data?.id !== 'undefined') {
      this.rentClicked.emit(this.data.id);
    }
  }

  public returnBook() {
    if (typeof this.data?.id !== 'undefined') {
      this.returnClicked.emit(this.data.id);
    }
  }
}
