import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import {BlogRoutingModule} from './blog-routing.module'
import {BlogService} from './services/blog.service';
import { BlogFormComponent } from '../modules/blog/pages/blog-form/blog-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from '../shared/components/command-bar/blog/blog.component';
import { EditComponent } from './components/forms/edit/edit.component';
@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent,
    BlogComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
   
  ],
  providers:[BlogService],
  exports:[
   BlogListComponent,
    BlogItemComponent
  ]
})
export class BlogModule { }
