import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs:any;

  constructor(private _blogService: BlogService) { }

  ngOnInit(){
    this._blogService.getBlogDetails().subscribe(a=>{
  this.blogs = a;
})
  }
 
}
