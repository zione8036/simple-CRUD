import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { Blog } from 'src/app/blog/models/blog';
import { BlogService } from 'src/app/blog/services/blog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
   formGroup: FormGroup;
  formArray: FormArray;


  constructor(private fb:FormBuilder,private _blogService: BlogService) {
   
    this.formGroup = this.fb.group({
    
      blogISBN:[''],
      blogAuthor:this.fb.array([
        new FormControl('')
      ])
      
    });
    this.formArray = this.formGroup.get('blogAuthor') as FormArray
   }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
        title: new FormControl(this._blogService.getDetail().title),
        description: new FormControl(this._blogService.getDetail().description),
        author: new FormControl(this._blogService.getDetail().author),
          
    });
  }

  addAuthor(){
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
