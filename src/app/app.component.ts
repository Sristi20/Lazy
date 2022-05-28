import { Component } from '@angular/core';
import {UserdataserviceService} from './userdataservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazy';
  constructor(private Userservice:UserdataserviceService){

  }
}
