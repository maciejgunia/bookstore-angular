import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './components/Book/BookComponent';
import { BookListComponent } from './components/BookList/BookListComponent';
import { HeaderComponent } from './components/Header/HeaderComponent';
import { LoginComponent } from './components/Login/LoginComponent';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
