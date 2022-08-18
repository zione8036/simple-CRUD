import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { User } from '../../models/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
 formGroup!: FormGroup;
 
  
  constructor(private fb:FormBuilder, private http: HttpClient, private router: Router) { 
   }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      password:[''],
      email:[''],
      name:[''],
      bio:[''],
    });
  }
onSubmit(){
  this.http.post(`${environment.url}/users`, this.formGroup.getRawValue()).subscribe(()=>{
    this.router.navigate(['login']);
  })
}

}
