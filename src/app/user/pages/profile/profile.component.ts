import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
 formGroup: FormGroup;
 
  
  constructor(private fb:FormBuilder) {
   
    this.formGroup = this.fb.group({
      email:[''],
      name:[''],
      bio:[''],
    });
    
   }

  ngOnInit(): void {
  }


  onSubmit(){
    const data =this.formGroup.value as User;
    console.log(data);
  }


}
