import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormComponent } from './components/form/form.component';
import {UserRoutingModule} from './user-routing.module'
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from '../core/interceptor/header.interceptor';
@NgModule({
  declarations: [
    ProfileComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi:true
  }],
  exports:[
    ProfileComponent,
    FormComponent
  ]
})
export class UserModule { }
