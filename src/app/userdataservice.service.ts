import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataserviceService {
  constructor(){}
  getAllUsers(){
    return [
      {id:101,name:'John',city:'DELHI',salary:2,dob:new Date("15/10/1989")},
      {id:102,name:'Ram',city:'PUNE',salary:80000,dob:new Date("05/10/1985")},
      {id:103,name:'Peter',city:'GOA',salary:190000,dob:new Date("10/10/1991")},
      {id:104,name:'Kunal',city:'DELHI',salary:55000,dob:new Date("18/12/1997")},

    ];
  }
}