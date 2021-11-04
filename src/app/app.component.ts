import { Component } from '@angular/core';
import { BookService } from './services/BookService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'bookstore-angular';
}
