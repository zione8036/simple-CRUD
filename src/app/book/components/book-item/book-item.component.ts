import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { BookModel } from './book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})





export class BookItemComponent implements OnInit {
  
formGroup: FormGroup;
formArray: FormArray;
formModel: BookModel = new BookModel;
bookList:any;
btnSaveShow:boolean=true;
btnUpdateShow:boolean=false;

  
  constructor(private fb:FormBuilder, private _bookService: BookService){
   
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
     this.formGroup = this.fb.group({
      bookName:[''],
      bookISBN:[''],
      bookAuthor:this.fb.array([
        new FormControl('')
      ])
      
    });
    this.getBookDetails();
    this.formArray = this.formGroup.get('bookAuthor') as FormArray
    
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

  addBook(){
    this.formModel.name = this.formGroup.value.bookName;
  this.formModel.isbn = this.formGroup.value.bookISBN;
  this.formModel.author = this.formGroup.value.bookAuthor;
    this._bookService.postBookDetails(this.formModel).subscribe({
      next:(a)=>{
        console.log(a);
      }, 
      error:(e)=>{
        console.log(e);
      },
      complete:()=>{
        console.log("Successfully posted!");
        alert("Recorded Successfully!");
        this.getBookDetails();
        this.formGroup.reset();
      }})
  }

getBookDetails(){
this._bookService.getBookDetails().subscribe(a=>{
  this.bookList = a;
})
}
deleteBookDetails(data:any){
  this._bookService.deleteBookDetails(data.id).subscribe({
      next:(a)=>{
        console.log(a);
      }, 
      error:(e)=>{
        console.log(e);
      },
      complete:()=>{
        console.log("Successfully deleted!");
        alert("Deleted successfully!");
        this.getBookDetails();
  }})
}

 deleteAll(){
   length=this.bookList.length;
   for (let index = 1; index < length+1; index++) {
     
  this._bookService.deleteBookAll(index).subscribe({
      next:(a)=>{
        console.log(a);
      }, 
      error:(e)=>{
        console.log(e);
      },
      })
};
  console.log("Successfully deleted!");
        this.getBookDetails();
}
getId(id:number):number{
  return this.formModel.id = id;
}

editBookDetails(data:any){
  this.showUpdatebtn();
  this.getId(data.id);
  this.formGroup.controls["bookName"].setValue(data.name);
  this.formGroup.controls["bookISBN"].setValue(data.isbn);
  this.formGroup.controls["bookAuthor"].setValue(data.author);
  this.formModel.id = data.id;  
}

updateBook(){
  console.log(this.formModel.id)
  this.formModel.name = this.formGroup.value.bookName;
  this.formModel.isbn = this.formGroup.value.bookISBN;
  this.formModel.author = this.formGroup.value.bookAuthor;
  this._bookService.putBookDetails(this.formModel, this.formModel.id).subscribe({
      next:(a)=>{
        console.log(a);
      }, 
      error:(e)=>{
        console.log(e);
      },
      complete:()=>{
        console.log("Successfully updated!");
        alert("Updated successfully!");
        this.getBookDetails();
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

