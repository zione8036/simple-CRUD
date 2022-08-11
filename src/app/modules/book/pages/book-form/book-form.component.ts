import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Book } from 'src/app/book/models/book';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  formGroup: FormGroup;
  formArray: FormArray;
  
  constructor(private fb:FormBuilder) {
   
    this.formGroup = this.fb.group({
      bookName:[''],
      bookISBN:[''],
      bookAuthor:this.fb.array([
        new FormControl('')
      ])
      
    });
    this.formArray = this.formGroup.get('bookAuthor') as FormArray
   }

  ngOnInit(): void {
  }

  addAuthor(){
    this.formArray.push(new FormControl(''));
  }
  deleteEntry(i:number){
      this.formArray.removeAt(i);
  }
  onSubmit(){
    const data =this.formGroup.value as Book;
    console.log(data);
  }

}
