import { Injectable } from "@angular/core";
import { DbService } from "../DbService/DbService";


@Injectable()
export class AuthService {

    constructor(private Service : DbService) {
        this.AuthState();
    }

    IsLogged = false;
    Role = false;
    
    AuthState() {

        if (localStorage.getItem('Session'))
        {
          this.IsLogged = true;
        }   
        else{
          this.IsLogged = false;         
        }
       }

    RoleCheck() {
    const req = this.Service.GetUserState('ManagerLogins');
    req.map(res => <any>res.json()).
      subscribe(res => {
        console.log("Is Manager Loged ?");
        console.log(res);
        this.Role = res;  },
      (err: any) => {
        console.log("Error !");
        console.log(err.json());
        this.Role = false;
      });
  }
}





