import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Blog } from 'src/app/blog/models/blog';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  formGroup: FormGroup;
  formArray: FormArray;
  
  constructor(private fb:FormBuilder) {
   
    this.formGroup = this.fb.group({
      title:[''],
      description:[''],
      author:[''],
      comment:this.fb.array([
        new FormControl(''),new FormControl('')
      ])
      
    });
    this.formArray = this.formGroup.get('comment') as FormArray
   }

  ngOnInit(): void {
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

}
