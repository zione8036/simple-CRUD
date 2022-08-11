import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Book } from 'src/app/book/models/book';
import { BookService } from 'src/app/book/services/book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formGroup: FormGroup;
  formArray: FormArray;


  constructor(private fb:FormBuilder,private _bookService: BookService) {
   
    this.formGroup = this.fb.group({
    
      bookISBN:[''],
      bookAuthor:this.fb.array([
        new FormControl('')
      ])
      
    });
    this.formArray = this.formGroup.get('bookAuthor') as FormArray
   }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
        bookName: new FormControl(this._bookService.getDetail().name),
          bookISBN: new FormControl(this._bookService.getDetail().isbn),
          
    });
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
