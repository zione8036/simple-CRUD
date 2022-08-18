import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HeaderInterceptor } from 'src/app/core/interceptor/header.interceptor';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup!: FormGroup;


  constructor(
    private fb:FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email:'',
      password:'',
    });
  }
onSubmit(){
  this.http.post(`${environment.url}/users`, this.formGroup.getRawValue(), {withCredentials:true}).subscribe((a:any)=>{
    HeaderInterceptor.accessToken = a.token;
    this.router.navigate(['/']);
  })
}
}
