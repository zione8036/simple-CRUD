import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormComponent } from './components/form/form.component';
import {UserRoutingModule} from './user-routing.module'
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
@NgModule({
  declarations: [
    ProfileComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  providers:[UserService],
  exports:[
    ProfileComponent,
    FormComponent
  ]
})
export class UserModule { }
