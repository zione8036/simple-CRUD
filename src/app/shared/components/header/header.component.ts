import { Component, OnInit } from '@angular/core';
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

  constructor(private _navNameService:HeaderService) { }

  ngOnInit(){
    this.navName=this._navNameService.getNavName();
  
  }

}
