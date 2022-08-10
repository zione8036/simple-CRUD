import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  blogs!:Blog[];

  constructor(private _blogService: BlogService) { }

  ngOnInit(){
    this.blogs= this._blogService.getBlogDetails();
  }
  
}

