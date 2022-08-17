import { ContentObserver } from '@angular/cdk/observers';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { BlogModel } from './blog.model';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  
formGroup: FormGroup;
formArray: FormArray;
formModel: BlogModel = new BlogModel;
blogList:any;
btnSaveShow:boolean=true;
btnUpdateShow:boolean=false;

  
  constructor(private fb:FormBuilder, private _blogService: BlogService){
   
    this.formGroup = this.fb.group({
      blogTitle:[''],
      blogDescription:[''],
      blogAuthor:[''],
      blogComment:this.fb.array([
        new FormControl('')
      ])
      
    });
    this.formArray = this.formGroup.get('blogComment') as FormArray
   }

  ngOnInit(): void {
    this._blogService.reloadPage$.subscribe(()=>
    {
      this.deleteAll();
    }
    );
     this.formGroup = this.fb.group({
      blogTitle:[''],
      blogDescription:[''],
      blogAuthor:[''],
      blogComment:this.fb.array([
        new FormControl('')
      ])
      
    });
    this.getBlogDetails();
    this.formArray = this.formGroup.get('blogComment') as FormArray
    
  }

  addComment(){
    this.formArray.push(new FormControl(''));
  }
  deleteEntry(i:number){
      this.formArray.removeAt(i);
  }
  onSubmit(){
    const data =this.formGroup.value as Blog;
    console.log(data);
  }

  addBlog(){
    this.formModel.title = this.formGroup.value.blogTitle;
    this.formModel.description = this.formGroup.value.blogDescription;
    this.formModel.author = this.formGroup.value.blogAuthor;
    this.formModel.comments = this.formGroup.value.blogComment;
    this._blogService.postBlogDetails(this.formModel).subscribe({
      next:(a)=>{
        console.log(a);
      }, 
      error:(e)=>{
        console.log(e);
      },
      complete:()=>{
        console.log("Successfully posted!");
        alert("Recorded Successfully!");
        this.getBlogDetails();
        this.formGroup.reset();
      }})
  }

getBlogDetails(){
this._blogService.getBlogDetails().subscribe(a=>{
  this.blogList = a;
})
}
deleteBlogDetails(data:any){
  this._blogService.deleteBlogDetails(data.id).subscribe({
      next:(a)=>{
        console.log(a);
      }, 
      error:(e)=>{
        console.log(e);
      },
      complete:()=>{
        console.log("Successfully deleted!");
        alert("Deleted successfully!");
        this.getBlogDetails();
  }})
}

 deleteAll(){
   length=this.blogList.length;
   for (let index = 1; index < length+1; index++) {
     
  this._blogService.deleteBlogAll(index).subscribe({
      next:(a)=>{
        console.log(a);
      }, 
      error:(e)=>{
        console.log(e);
      },
      })
};
  console.log("Successfully deleted!");
        this.getBlogDetails();
}
getId(id:number):number{
  return this.formModel.id = id;
}

editBlogDetails(data:any){
  this.showUpdatebtn();
  this.getId(data.id);
  this.formGroup.controls["blogTitle"].setValue(data.title);
  this.formGroup.controls["blogAuthor"].setValue(data.author);
  this.formGroup.controls["blogDescription"].setValue(data.description);
  this.formGroup.controls["blogComment"].setValue(data.comments);
  this.formModel.id = data.id;  
}

updateBlog(){
  this.formModel.title = this.formGroup.value.blogTitle;
  this.formModel.description = this.formGroup.value.blogDescription;
  this.formModel.author = this.formGroup.value.blogAuthor;
  this.formModel.comments = this.formGroup.value.blogComment;
  this._blogService.putBlogDetails(this.formModel, this.formModel.id).subscribe({
      next:(a)=>{
        console.log(a);
      }, 
      error:(e)=>{
        console.log(e);
      },
      complete:()=>{
        console.log("Successfully updated!");
        alert("Updated successfully!");
        this.getBlogDetails();
        this.showSavebtn();
      }})
}
showSavebtn(){
this.btnSaveShow=true;
this.btnUpdateShow=false;
}
showUpdatebtn(){
  this.btnSaveShow=false;
  this.btnUpdateShow=true;
}
  
}

