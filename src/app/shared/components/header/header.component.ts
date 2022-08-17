import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Header} from '../header';

import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navName!:Header[];
  activeLink=0;
message='';
compLogin:boolean=true;
compAuthorize:boolean=false;
  constructor(
    private _navNameService:HeaderService, 
    private http: HttpClient,
){ }

  ngOnInit(){
    this.navName=this._navNameService.getNavName();
    this.http.get(`http://localhost:3000/User`).subscribe(
    (a:any)=>{
        this.message=`Hi ${a.name}`;
    }
  ),this.ComponentShow  ();
}

ComponentHide(){
  this.compLogin=true;
  this.compAuthorize=false;
}
ComponentShow(){
  this.compLogin=false;
  this.compAuthorize=true;
}


}
