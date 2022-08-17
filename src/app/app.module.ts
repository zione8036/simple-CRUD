import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { BlogModule } from './blog/blog.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Materials
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BookModule,
    BlogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    NgbModule,
    
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
