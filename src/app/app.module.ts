import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { BlogModule } from './blog/blog.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BookModule,BlogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
