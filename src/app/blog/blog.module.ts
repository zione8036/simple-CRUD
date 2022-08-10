import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import {BlogRoutingModule} from './blog-routing.module'
import {BlogService} from './services/blog.service';


@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule,BlogRoutingModule
  ],
  providers:[BlogService],
  exports:[
   BlogListComponent,
    BlogItemComponent
  ]
})
export class BlogModule { }
